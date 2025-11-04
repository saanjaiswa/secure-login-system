# Secure Login System

A secure authentication system with encrypted password storage, built using Node.js, Express, and MongoDB.

## Features
- User registration with hashed passwords (bcrypt)
- User login with JSON Web Tokens (JWT)
- Protected route to fetch current user info
- Input validation using express-validator

## Requirements
- Node.js (v16+ recommended)
- MongoDB (Atlas or local)

## Setup
1. Clone or unzip the project.
2. Copy `.env.example` to `.env` and set `MONGO_URI` and `JWT_SECRET`.
3. Install dependencies:
   ```
   npm install
   ```
4. Run the app:
   ```
   npm run dev
   ```
   or
   ```
   npm start
   ```

## API Endpoints
- `POST /api/auth/register` — Register a new user. Body: `{ name, email, password }`
- `POST /api/auth/login` — Login. Body: `{ email, password }` — returns `{ token }`
- `GET /api/auth/me` — Protected route. Set header `x-auth-token: <token>`

## Notes
- This is a starter project. For production, consider:
  - Stronger JWT expiry and refresh tokens
  - HTTPS / TLS
  - Rate limiting and brute-force protection
  - Helmet for secure headers
  - CSRF protection if using cookies

