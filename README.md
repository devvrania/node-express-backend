# Express Backend API

A production-ready Node.js Express backend application following best practices with Swagger documentation.

## Features

- ✅ Express.js with ES6 modules
- ✅ MongoDB database with Mongoose ODM
- ✅ Docker and Docker Compose support
- ✅ Security middleware (Helmet, CORS)
- ✅ Request logging (Morgan)
- ✅ Rate limiting
- ✅ Error handling middleware
- ✅ Swagger/OpenAPI documentation
- ✅ Environment configuration
- ✅ Graceful shutdown
- ✅ Async/await error handling
- ✅ Standardized API responses

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB (for local development) OR Docker & Docker Compose (recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/devvrania/node-express-backend.git
cd node-express-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration values.

### Running the Application

#### Option 1: Using Docker (Recommended)

This is the easiest way to run the application with MongoDB.

**Start all services:**
```bash
npm run docker:up
# or
docker-compose up -d
```

**View logs:**
```bash
npm run docker:logs
# or
docker-compose logs -f
```

**Stop all services:**
```bash
npm run docker:down
# or
docker-compose down
```

**Rebuild containers:**
```bash
npm run docker:build
# or
docker-compose build
```

#### Option 2: Local Development

**Prerequisites:** MongoDB must be running locally on port 27017

**Development Mode:**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## API Documentation

Once the server is running, you can access the Swagger documentation at:
- **Swagger UI**: `http://localhost:3000/api-docs`

## API Endpoints

### Health Check
- `GET /health` - Basic health check
- `GET /health` - Detailed health check with uptime

### Users
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create a new user
- `PUT /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user

## Project Structure

```
src/
├── app.js                 # Express app configuration
├── server.js              # Server entry point
├── config/
│   ├── env.js            # Environment configuration
│   ├── database.js       # MongoDB connection
│   └── swagger.js        # Swagger configuration
├── controllers/
│   ├── healthController.js
│   └── userController.js
├── middleware/
│   ├── errorHandler.js   # Error handling middleware
│   ├── logger.js         # Request logging
│   └── rateLimiter.js    # Rate limiting
├── models/
│   └── User.js           # User Mongoose model
├── routes/
│   ├── index.js          # Main router
│   ├── healthRoutes.js
│   └── userRoutes.js
├── services/             # Business logic layer
└── utils/
    ├── ApiError.js       # Custom error class
    ├── ApiResponse.js    # Standardized responses
    └── asyncHandler.js   # Async error wrapper
```

## Docker Commands

```bash
# Build Docker images
npm run docker:build

# Start all services (app + MongoDB)
npm run docker:up

# Stop all services
npm run docker:down

# View logs
npm run docker:logs

# Restart services
npm run docker:restart
```

## Environment Variables

See `.env.example` for all available environment variables.

### MongoDB Configuration

- `MONGODB_URI`: MongoDB connection string
  - Local: `mongodb://localhost:27017/express-backend`
  - Docker: `mongodb://mongodb:27017/express-backend`
  - Atlas: `mongodb+srv://username:password@cluster.mongodb.net/database`

## Best Practices Implemented

1. **Security**
   - Helmet.js for security headers
   - CORS configuration
   - Rate limiting
   - Input validation

2. **Error Handling**
   - Centralized error handling middleware
   - Custom error classes
   - Proper HTTP status codes

3. **Code Organization**
   - Separation of concerns (controllers, services, routes)
   - Reusable utilities
   - Environment-based configuration

4. **Documentation**
   - Swagger/OpenAPI 3.0
   - Inline JSDoc comments
   - API endpoint documentation

5. **Database**
   - MongoDB with Mongoose ODM
   - Data validation at schema level
   - Indexed fields for better performance
   - Automatic timestamps (createdAt, updatedAt)

6. **Performance**
   - Request logging
   - Rate limiting
   - Graceful shutdown
   - Database connection pooling

7. **Docker**
   - Multi-stage Dockerfile
   - Docker Compose for orchestration
   - Health checks for services
   - Volume persistence for MongoDB data