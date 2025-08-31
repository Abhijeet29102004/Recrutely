# Recrutely - Job Application Platform

## Overview

Recrutely is a full-stack web application that connects job seekers and recruiters. It features user authentication, profile management, job posting/searching, and application tracking in a modern interface.

## Features

### For Candidates
- **Profile Management**: Create and edit professional profiles
- **Resume Management**: Upload and store multiple resumes
- **Job Search**: Browse and filter job listings
- **Application Tracking**: Monitor application status
- **Education & Experience**: Track academic and work history

### For Recruiters
- **Company Profile**: Create and manage company information
- **Job Management**: Post, edit and monitor job listings
- **Applicant Review**: View and manage candidate applications
- **Dashboard**: Track application metrics

## Technology Stack

### Frontend
- **React**: UI building
- **React Router**: Navigation and routing
- **Axios**: API communication
- **Context API**: State management
- **CSS**: Custom styling

### Backend
- **Node.js**: Runtime environment
- **Express**: Web framework
- **PostgreSQL**: Database
- **JSON Web Tokens**: Authentication
- **Cloudinary**: File storage for resumes and images

## Database Schema

The application uses PostgreSQL with the following main tables:
- `users`: User accounts and authentication
- `user_education`: Educational qualifications
- `user_experience`: Work history
- `user_skills`: Technical and soft skills
- `user_documents`: Resume and profile photo storage
- `jobs`: Job listings information
- `applications`: Job application data
- `recruiters`: Recruiter and company information

## Setup Instructions

### Prerequisites
- Node.js
- PostgreSQL
- Cloudinary account

### Environment Variables
Create a `.env` file in the backend directory:

```
PORT=5050
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

### Installation

1. **Clone the repository**
   ```
   git clone https://github.com/Abhijeet29102004/Recrutely.git
   cd recrutely
   ```

2. **Install backend dependencies**
   ```
   cd backend
   npm install
   ```

3. **Set up the database**
   ```
   psql -U postgres -f query.sql
   ```

4. **Install frontend dependencies**
   ```
   cd ../frontend
   npm install
   ```

5. **Start the application**
   ```
   # Terminal 1: Start backend
   cd backend
   npm run dev

   # Terminal 2: Start frontend
   cd frontend
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5050

## Usage

### Authentication
- Register as a candidate or recruiter
- Login with email/password
- Google OAuth integration available

### Candidate Workflow
1. Create/edit your professional profile
2. Upload resume(s)
3. Search for jobs
4. Apply with your resume and a personalized message
5. Track application status

### Recruiter Workflow
1. Set up company profile
2. Post job listings with requirements
3. Review incoming applications
4. Update application status

## Project Structure

```
├── backend/
│   ├── controllers/    # Business logic
│   ├── db/             # Database configuration
│   ├── middleware/     # Authentication middleware
│   ├── models/         # Data models
│   ├── routes/         # API routes
│   └── server.js       # Entry point
│
└── frontend/
    ├── public/         # Static assets
    └── src/
        ├── components/ # Reusable components
        ├── context/    # React context
        ├── pages/      # Page components
        └── App.jsx     # Main component
```

## API Endpoints

### Authentication
- `POST /api/auth/register`: Register new user
- `POST /api/auth/login`: User login
- `GET /api/auth/google`: Google OAuth

### Profile
- `GET /api/user`: Get user profile
- `PUT /api/user`: Update user profile

### Jobs
- `GET /api/jobs`: List all jobs
- `POST /api/jobs`: Create job (recruiters)
- `GET /api/jobs/:id`: Get job details

### Applications
- `POST /api/applications`: Submit application
- `GET /api/applications/:userId`: Get user applications
- `GET /api/applicants/:jobId`: Get job applicants (recruiters)

## Contributors
- Abhijeet Kumar
- Pranshu Mani Tripathi


