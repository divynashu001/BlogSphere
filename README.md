BlogSphere: A Minimal Blogging Platform
BlogSphere is a full-stack web application designed to provide a seamless blogging experience. It allows users to create, read, update, and delete blog posts through a RESTful API and a responsive React frontend. The project leverages modern web technologies to deliver a clean, user-friendly interface with efficient state management.
Overview

Backend: A Node.js and Express server with MongoDB for persistent data storage.
Frontend: A React single-page application styled with TailwindCSS, utilizing Redux for state management.
Deployment: Built with Vite for fast development and production builds.

Project Structure

backend/: Contains the Node.js/Express server and MongoDB integration.
frontend/: Contains the React application with Redux for state management.
.gitignore: Excludes node_modules, build artifacts, and environment variables.
README.md: Project documentation and setup instructions.

Prerequisites

Node.js (v16 or higher)
MongoDB (running locally on default port 27017)
Git

Installation
1. Clone the Repository
Clone the repository to your local machine and navigate to the project directory:
git clone <your-repo-url>
cd simple-blog-platform

2. Set Up the Backend
Navigate to the backend directory, install dependencies, and start the server:
cd backend
npm install
npm start

The backend server will be available at http://localhost:5000. Ensure MongoDB is running locally.
Backend Packages

cors
express
mongoose
nodemon (dev)

3. Set Up the Frontend
In a separate terminal, navigate to the frontend directory, install dependencies, and start the development server:
cd frontend
npm install
npm start

The frontend will be accessible at http://localhost:5173.
Frontend Packages

react
react-dom
react-router-dom
tailwindcss
redux
react-redux
redux-thunk
react-icons

Frontend Dev Dependencies

vite
@vitejs/plugin-react
postcss
autoprefixer

Usage

Home Page: View a list of blog posts at /.
Create Post: Navigate to /create to add a new post.
View Post: Click a post title to view its details at /post/:id.
Edit Post: Use the "Edit" option on a post detail page to modify it at /edit/:id.
Delete Post: Use the "Delete" option on a post detail page to remove it.

API Endpoints

GET /api/posts: Retrieve all blog posts.
GET /api/posts/:id: Retrieve a single post by ID.
POST /api/posts: Create a new blog post.
PUT /api/posts/:id: Update an existing post.
DELETE /api/posts/:id: Delete a post.

Technologies

Backend: Node.js, Express, MongoDB, Mongoose
Frontend: React, React Router, TailwindCSS, Redux
Build Tool: Vite
Version Control: Git

