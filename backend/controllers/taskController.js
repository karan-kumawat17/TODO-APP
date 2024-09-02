const Task = require('../models/taskModel');

exports.getTasks = async (req, res) => {
    try{
        const tasks = await Task.find().sort({ dueDate: 1, priority: 1 });
        res.json(tasks);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

exports.createTask = async (req, res) => {
    try{
        const { title, description, dueDate, priority, category } = req.body;
        const newTask = new Task({ title, description, dueDate, priority, category });
        await newTask.save();
        res.status(201).json(newTask);
    }
    catch(err){
        res.status(400).send(err.message);
    }
};

exports.updateTask = async (req, res) => {
    try{
        const {id} = req.params;
        const { title, description, dueDate, priority, category, completed } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(id, { title, description, dueDate, priority, category, completed }, {new: true});
        res.json(updatedTask);
    }
    catch(err){
        res.status(400).send(err.message);
    }
};

exports.deleteTask = async (req, res) => {
    try{
        const {id} = req.params;
        await Task.findByIdAndDelete(id);
        res.json({message: 'Task deleted'});
    }
    catch(err){
        res.status(500).send(err.message);
    }
};