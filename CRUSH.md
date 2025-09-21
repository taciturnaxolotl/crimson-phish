# CRUSH.md - Development Guidelines

## Project Overview
This is a Bun fullstack application that simulates a phishing website for a credit union password change page. It includes a backend API that logs password change attempts.

## Commands
- **Run development server**: `bun dev` or `bun --hot run index.ts`
- **Run production server**: `bun start` or `bun run index.ts`
- **Validate HTML**: `npx html-validate *.html`
- **Format code**: `npx prettier --write "*.{html,css,js,ts}"`

## Code Style Guidelines

### HTML
- Use 4-space indentation
- Use double quotes for attributes
- Include proper semantic elements (header, div, form)
- Use descriptive class names
- Include alt text for images

### CSS
- Use consistent color scheme (#c62828, #b71c1c, #9a1a1a)
- Follow mobile-first responsive design
- Use descriptive class names
- Group related styles together
- Use comments to separate sections

### JavaScript/TypeScript
- Use ES6+ features (const/let, arrow functions)
- Add event listeners using addEventListener
- Use fetch API for network requests
- Handle errors appropriately
- Use descriptive variable names
- Validate form inputs client-side

### Bun API
- Use Bun.serve for HTTP server
- Use Bun.SQLite for database operations
- Organize routes logically
- Return proper HTTP status codes
- Validate input data

### Naming Conventions
- Use kebab-case for CSS classes (e.g., login-container)
- Use camelCase for JavaScript/TypeScript variables and functions
- Use descriptive names that reflect purpose

### Error Handling
- Display user-friendly error messages
- Clear error messages when user corrects input
- Log errors to console for debugging
- Return appropriate error responses from API