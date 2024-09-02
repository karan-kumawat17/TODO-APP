const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware:
app.use(cors());
app.use(express.json());

// Routes:
const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

// MongoDB connection:
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const PORT = process.env.port || 5000;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})