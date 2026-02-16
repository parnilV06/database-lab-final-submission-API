# 📚 Library API – Production Ready CRUD Service

This project is a **production-ready REST API** built using **Node.js, Express, MongoDB, and Swagger**.  
It demonstrates a complete CRUD workflow with **professional error handling**, **self-documenting APIs**, **Postman testing**, and **live deployment**.

The API is designed to be resilient, well-documented, and easy for other developers to consume without reading the source code.

---

## 🚀 Live Deployment

- **Live API URL:**  
  https://database-lab-final-submission-api.onrender.com/

- **Swagger Documentation:**  
  https://database-lab-final-submission-api.onrender.com/api-docs/

---

## 📑 Features

- CRUD operations for Books
- MongoDB database using Mongoose
- Centralized error handling middleware
- Swagger (OpenAPI) documentation
- Postman test suite with environment variables
- Production-ready deployment

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Swagger (swagger-jsdoc, swagger-ui-express)
- Postman

---

## 📦 API Endpoints (Books)

| Method | Endpoint        | Description            |
|------|----------------|------------------------|
| GET  | /books         | Get all books          |
| POST | /books         | Create a new book      |
| PUT  | /books/:id     | Update a book by ID    |
| DELETE | /books/:id   | Delete a book by ID    |

All endpoints are fully documented in Swagger.

---

## 🌍 Environment Variables

Create a `.env` file and define the following variables:
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/swaggerBooksDB
NODE_ENV=production

## 🧪 Postman Collection

- A Postman collection is included in the `postman/` folder.
- Uses environment variables (`{{baseUrl}}`) to switch between local and live environments.
- Contains requests for all CRUD operations.

File location:Z:postman\api-tests.json

## ⚙️ Local Setup Instructions

1. Clone the repository
   ```bash
   git clone <your-github-repo-url>
Install dependencies

npm install
Start the server

npm start
Open Swagger UI

http://localhost:3000/api-docs