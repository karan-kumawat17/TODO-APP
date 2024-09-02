const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    completed: {type: Boolean, default: false},
    dueDate: {type: Date},
    description: {type: String},
    priority: {type: String, enum: ['High', 'Medium', 'Low'], default: 'Medium'},
    category: {type: String},
}, {timestamps: true});

module.exports = mongoose.model('Task', taskSchema);