require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const bookRoutes = require('./routes/books.routes');

const app = express();
app.use(express.json());

/* -------------------- MongoDB Connection -------------------- */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

/* -------------------- Swagger Configuration -------------------- */
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library API',
      version: '1.0.0',
      description: 'Self-Documenting API using Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* -------------------- Routes -------------------- */
app.use('/books', bookRoutes);

/* -------------------- Server -------------------- */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});
