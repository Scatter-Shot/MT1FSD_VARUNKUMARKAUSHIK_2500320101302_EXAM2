# MT1FSD_VARUNKUMARKAUSHIK_2500320101302_EXAM2
Student Record Management REST API using Node.js and Express.js.

## Setup and Run
1. Install dependencies: `npm install`
2. Start the server: `node server.js`
3. Server runs at `http://localhost:3000`

## Endpoints
- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get student by ID
- `GET /api/students/filter?branch=CSE` - Filter students by branch
- `POST /api/students` - Add a new student
- `PUT /api/students/:id` - Update a student
- `DELETE /api/students/:id` - Delete a student