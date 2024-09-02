import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const AddTask = ({ fetchTasks }) => {
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState(null);
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title) return;
        await axios.post('http://localhost:5000/api/tasks', { title, description, dueDate: dueDate || null, priority, category });
        setTitle('');
        setDescription('');
        setDueDate(null);
        setPriority('Medium');
        setCategory('');
        fetchTasks();
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ flexGrow: 1, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Task Title"
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                        fullWidth
                        multiline
                        rows={1}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Due Date"
                            value={dueDate}
                            onChange={(newValue) => setDueDate(newValue)}
                            renderInput={(params) => <TextField {...params} fullWidth />}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                        <InputLabel>Priority</InputLabel>
                        <Select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            label="Priority"
                        >
                            <MenuItem value="High">High</MenuItem>
                            <MenuItem value="Medium">Medium</MenuItem>
                            <MenuItem value="Low">Low</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        variant="outlined"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Category"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" color="primary" type="submit" size='large' sx={{ mt: 2, px: 4}}>
                        Add
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AddTask;
