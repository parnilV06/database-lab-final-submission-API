const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Production Ready CRUD API',
            version: '1.0.0',
            description: 'A complete CRUD API managing Users',
        },
        servers: [
            {
                url: '{baseUrl}',
                description: 'Dynamic Server',
                variables: {
                    baseUrl: {
                        default: 'http://localhost:5000',
                        description: 'API base URL'
                    }
                }
            },
        ],
        components: {
            schemas: {
                User: {
                    type: 'object',
                    required: ['name', 'email', 'age'],
                    properties: {
                        name: {
                            type: 'string',
                            description: 'User name',
                            example: 'John'
                        },
                        email: {
                            type: 'string',
                            description: 'User email',
                            example: 'john@example.com'
                        },
                        age: {
                            type: 'number',
                            description: 'User age',
                            example: 25
                        }
                    }
                }
            }
        }
    },
    apis: ['./routes/*.js', './swagger.js'],
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get All Users
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Server Error
 *   post:
 *     summary: Create User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Validation Error
 *       500:
 *         description: Server Error
 * 
 * /api/users/{id}:
 *   get:
 *     summary: Get User by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server Error
 *   put:
 *     summary: Update User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server Error
 *   delete:
 *     summary: Delete User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server Error
 */
