# Recrutely Registration

## Overview
Recrutely is a web application that allows users to register as candidates or employers. This project consists of a frontend built with React and a backend powered by Node.js and Express, connected to a PostgreSQL database.

## Project Structure
The project is organized into two main directories: `backend` and `frontend`.

### Backend
- **src/index.js**: Entry point of the backend application. Sets up the Express server, connects to the PostgreSQL database, and configures middleware and routes.
- **src/controllers/authController.js**: Contains functions for handling authentication-related requests, including user registration.
- **src/models/userModel.js**: Defines the User model representing the user data structure in the PostgreSQL database.
- **src/routes/authRoutes.js**: Sets up routes for authentication-related endpoints, including a POST route for user registration.
- **package.json**: Lists dependencies and scripts for running the backend server.
- **README.md**: Documentation for the backend, including setup instructions and API endpoint details.

### Frontend
- **src/pages/register.jsx**: Contains the registration form component that collects user input (full name, email, password, and role) and handles form submission to the backend.
- **src/App.jsx**: Main application component that sets up routing and includes the registration page.
- **src/index.js**: Entry point of the frontend application that renders the main App component into the DOM.
- **package.json**: Lists dependencies and scripts for running the frontend application.
- **README.md**: Documentation for the frontend, including setup instructions and usage details.

## Setup Instructions

### Backend
1. **Install Dependencies**: Navigate to the `backend` directory and run:
   ```
   npm install
   ```
2. **Set Up PostgreSQL Database**:
   - Create a PostgreSQL database.
   - Create a `users` table with the following columns:
     - `id`: SERIAL PRIMARY KEY
     - `full_name`: VARCHAR NOT NULL
     - `email`: VARCHAR UNIQUE NOT NULL
     - `password`: VARCHAR NOT NULL
     - `role`: VARCHAR CHECK (role IN ('candidate', 'employer')) NOT NULL

3. **Run the Server**: Start the backend server by running:
   ```
   npm start
   ```

### Frontend
1. **Install Dependencies**: Navigate to the `frontend` directory and run:
   ```
   npm install
   ```
2. **Run the Application**: Start the frontend application by running:
   ```
   npm start
   ```

## API Endpoints
- **POST /api/register**: Endpoint for user registration. Expects a JSON body with `fullName`, `email`, `password`, and `role`.

## Usage
- Navigate to the registration page to create a new account.
- Fill in the required fields and submit the form to register.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.