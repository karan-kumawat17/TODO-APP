import React from 'react';
import TaskItem from './TaskItem';
import { List, Paper, Typography } from '@mui/material';

const TaskList = ({ tasks, fetchTasks }) => {
    return (
        <Paper elevation={3} sx={{ p: 2, mt: 4 }}>
            {tasks.length > 0 ? (
                <List sx={{ width: '100%', maxWidth: 600, margin: '0 auto' }}>
                    {tasks.map((task) => (
                        <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />
                    ))}
                </List>
            ) : (
                <Typography variant='h6' color='textSecondary' align='center'>
                    No Tasks available. Please add some tasks!
                </Typography>
            )}
        </Paper>
    );
};

export default TaskList;