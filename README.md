# Phishing Simulator

This is a phishing simulation application built with Bun. It mimics a credit union password change page and logs all password change attempts.

## Features

- Simulated password change form
- Backend API that logs password attempts
- Admin dashboard to view captured credentials
- In-memory SQLite database

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
bun install
```

### Running the Application

Development mode with hot reloading:

```bash
bun dev
```

Production mode:

```bash
bun start
```

## Usage

1. Access the main page at `http://localhost:3000/`
2. Fill out the password change form
3. View captured credentials at `http://localhost:3000/admin`

## Project Structure

- `index.ts` - Main application file with server and API routes
- `index.html` - Main phishing page
- `admin.html` - Admin dashboard to view captured credentials
- `styles.css` - Main stylesheet
- `loginstyles.css` - Login-specific styles

## Educational Purpose

This application is designed for educational purposes only to demonstrate how phishing attacks work. Do not use this for malicious purposes.

This project was created using Bun. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
