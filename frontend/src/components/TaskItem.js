import React from 'react';
import axios from 'axios';
import { Checkbox, Typography, IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const priorityColors = {
    High: '#ffcccc',
    Medium: '#fff4cc',
    Low: '#ccffcc'
}

const TaskItem = ({ task, fetchTasks }) => {
    // console.log(task);
    const toggleCompletion = async () => {
        await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
            ...task,
            completed: !task.completed,
        });
        fetchTasks();
    };

    const deleteTask = async () => {
        await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
        fetchTasks();
    };

    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={deleteTask}>
                    <DeleteIcon />
                </IconButton>
            }
            sx={{ 
                textDecoration: task.completed ? 'line-through' : 'none',
                backgroundColor: priorityColors[task.priority] || '#ffffff',
                borderRadius: '4px',
                marginBottom: '8px',
              }}
        >
            <Checkbox
                edge="start"
                checked={task.completed}
                onChange={toggleCompletion}
                tabIndex={-1}
            />
            <ListItemText
                primary={task.title}
                secondary={
                    <>
                        {task.description && (
                            <Typography variant="body2" color="textPrimary">
                                {task.description}
                            </Typography>
                        )}
                        {task.dueDate && (
                            <Typography variant="body2" color="textSecondary">
                                Due: {new Date(task.dueDate).toLocaleDateString()}
                            </Typography>
                        )}
                        <Typography variant="body2" color="textSecondary">
                            Priority: {task.priority}
                        </Typography>
                        {task.category && (
                            <Typography variant="body2" color="textSecondary">
                                Category: {task.category}
                            </Typography>
                        )}
                    </>
                }
            />
        </ListItem>
    );
};

export default TaskItem;