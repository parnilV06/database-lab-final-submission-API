# Production Ready CRUD API

A complete Production-Ready Node.js REST API for managing users with Express, MongoDB, and documented with Swagger. Developed to pass Production-Ready certification requirements.

## Live Deployment URL
*(Update with your production deployment URL)*
https://your-api.onrender.com

## Swagger Documentation
https://your-api.onrender.com/api-docs

## Required Environment Variables
The application uses the following environment variables (see `.env.example`):
- `PORT`: Port number for the server (e.g., 5000)
- `MONGO_URI`: Your MongoDB connection string
- `NODE_ENV`: Application environment (`development`, `production`)

## Local Setup

1. **Clone the repository** (if applicable):
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set Environment Variables**:
   Copy `.env.example` to `.env` and configure `MONGO_URI`.
4. **Start the Development Server**:
   ```bash
   npm run dev
   ```

## API Endpoints

### 1. Create User
- **Method**: `POST`
- **URL**: `/api/users`
- **Body**: 
  ```json
  {
    "name": "John",
    "email": "john@example.com",
    "age": 25
  }
  ```

### 2. Get All Users
- **Method**: `GET`
- **URL**: `/api/users`

### 3. Get User by ID
- **Method**: `GET`
- **URL**: `/api/users/:id`

### 4. Update User
- **Method**: `PUT`
- **URL**: `/api/users/:id`
- **Body**: `JSON object with fields to update`

### 5. Delete User
- **Method**: `DELETE`
- **URL**: `/api/users/:id`

## Deployment Notes
- Port and Database configuration pull values from `process.env`. Do not hardcode secrets into the source code.
- Ensure the selected service (Render / Railway / Vercel) accepts MongoDB TLS connections.
