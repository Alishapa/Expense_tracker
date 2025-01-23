# Expense_tracker
 
Expense Tracker Backend

This project provides a backend for an expense tracking application, including user authentication, transaction management, and expense analysis. It leverages AWS Lambda for a serverless architecture, PostgreSQL for data storage, and JWT for user authentication.

Setup Instructions

1. Clone the Repository

git clone <repository_url>
cd expense-tracker-backend

2. Install Dependencies

Run the following command to install required Node.js packages:

npm install

3. Configure Environment Variables

Create a .env file in the src/ directory and populate it with the following:

JWT_SECRET=your_jwt_secret_here
DATABASE_URL=postgresql://username:password@localhost:5432/expense_tracker

Replace the placeholders with your actual PostgreSQL database credentials and a secure JWT secret.

4. Set Up the Database

Ensure PostgreSQL is running and execute the migration script to create the required tables:

psql -U <your_postgres_username> -d expense_tracker -f src/db/migrations.sql

5. Run Locally

Use the Serverless Framework to run the application offline:

Install the Serverless Framework:

npm install -g serverless

Start the local server:

sls offline

The application will be available at http://localhost:3000.

API Guide

Base URL

For local development: http://localhost:3000

For deployed functions: https://<your-api-gateway-endpoint>

1. User Registration

Endpoint: POST /register

Request Body:

{
  "email": "user@example.com",
  "password": "password123"
}

Response:

{
  "message": "User registered!"
}

2. User Login

Endpoint: POST /login

Request Body:

{
  "email": "user@example.com",
  "password": "password123"
}

Response:

{
  "token": "<JWT_TOKEN>"
}

3. Add Transaction

Endpoint: POST /transactions

Headers:

{
  "Authorization": "Bearer <JWT_TOKEN>"
}

Request Body:

{
  "amount": 100.5,
  "category": "groceries",
  "date": "2025-01-23"
}

Response:

{
  "message": "Transaction added!"
}

4. Delete Transaction

Endpoint: DELETE /transactions/{id}

Headers:

{
  "Authorization": "Bearer <JWT_TOKEN>"
}

Response:

{
  "message": "Transaction deleted!"
}

5. Expense Visualization

Endpoint: GET /summary

Headers:

{
  "Authorization": "Bearer <JWT_TOKEN>"
}

Response:

[
  {
    "category": "groceries",
    "total": 200.5
  },
  {
    "category": "transportation",
    "total": 50.0
  }
]

Additional Notes

Ensure your .env file is properly configured before starting the application.

For deployed versions, replace the base URL with your actual API Gateway endpoint.

Use tools like Postman or curl to test the endpoints.

