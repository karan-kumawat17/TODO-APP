# TODO-APP

A simple and intuitive To-Do application built using the MERN stack (MongoDB, Express, React, Node.js). This app allows users to manage tasks, set priorities, categorize tasks, and more.

## Features

- **Add Tasks**: Create tasks with titles, descriptions, due dates, priorities, and categories.
- **Task Prioritization**: Assign priority levels (e.g., Low, Medium, High) to tasks.
- **Completion Tracking**: Mark tasks as completed or not completed.
- **Delete Tasks**: Remove tasks when no longer needed.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (For local development or use MongoDB Atlas for cloud database)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/karan-kumawat17/TODO-APP.git
   cd TODO-APP
   ```

2. **Go to backend and install node-modules**

   ```bash
   cd backend
   npm install --legacy-peer-deps
   ```
      
3. **Go to frontend and install node-modules**

   ```bash
   cd frontend
   npm install --legacy-peer deps
   ```

4. **In the backend create a .env file**

   ```bash
   MONGODB_URI=Your connection string/dbName
   ```
5. **In the MongoDBCompass create a database named todo**
   connection string should look like:
   ```bash
   mongodb://localhost:27017/
   ```

### Running the application

1. **Start MongoDB**
   
   ```bash
   mongod
   ```
   
2. **Run Backend**

  Open a new Command Prompt, navigate to the backend directory, and run:
  
   ```bash
   cd backend
   npm start
   ```

3. **Run Frontend**

   Open another Command Prompt, navigate to the frontend directory, and run:

   ```bash
   cd frontend
   npm start
   ```

## Directory Structure:

TODO-APP/
├── backend/          # Backend code (Node.js + Express + MongoDB)
│   ├── models/       # Mongoose models
│   ├── routes/       # Express routes
│   ├── controllers/  # Route controllers
│   ├── server.js     # Entry point for the backend server
│   └── ...           # Other backend files
└── frontend/         # Frontend code (React.js)
    ├── public/       # Public files (index.html)
    ├── src/          # React components, styles, utils, etc.
    └── ...           # Other frontend files
