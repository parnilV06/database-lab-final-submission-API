const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const { errorHandler } = require('./middleware/error.middleware');
const setupSwagger = require('./swagger');

const app = express();

// Enable CORS
app.use(cors());

// Enable JSON parsing
app.use(express.json());

// Mount API routes
app.use('/api/users', userRoutes);

// Setup Swagger Documentation (available at /api-docs)
setupSwagger(app);

// Use global error middleware
app.use(errorHandler);

module.exports = app;
