import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import { Container, Typography } from '@mui/material';

const HomePage = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const response = await axios.get(`http://localhost:5000/api/tasks`);
        setTasks(response.data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                To-Do List
            </Typography>
            <AddTask fetchTasks={fetchTasks} />
            <TaskList tasks={tasks} fetchTasks={fetchTasks} />
        </Container>
    );
};

export default HomePage;