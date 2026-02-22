# Course API (NestJS Challenge)

This is a simple Course API built with [NestJS](https://nestjs.com/) that fulfills the challenge requirements:

- **Entity & DTOs**: Course management with `title`, `level`, and `duration`.
- **Validation**: Uses `class-validator` to strict validate input (Returns 400 Bad Request on error).
- **In-memory store**: Uses an array for data persistence across endpoints.
- **REST Endpoints**:
  - `GET /courses` (200 OK)
  - `GET /courses/:id` (200 OK | 404 Not Found)
  - `POST /courses` (201 Created | 400 Bad Request)
  - `PUT /courses/:id` (200 OK | 404 Not Found)
  - `DELETE /courses/:id` (200 OK | 404 Not Found)
- **Documentation**: Swagger UI is available at `/docs`.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
```bash
# Install dependencies
npm install
```

### Running the App
```bash
# Start server in watch mode
npm run start:dev
```
The application will run on `http://localhost:3000`. 
To view the generated Swagger API documentation, navigate to `http://localhost:3000/docs`.

### Running Tests
Unit tests are included for the course controller and service.
```bash
# Run unit tests
npm run test
```

## Challenge Submission details
- Uses DTOs + class-validator
- Returns proper HTTP status codes
- Clean structure: `courses.module` -> `courses.controller` -> `courses.service`
