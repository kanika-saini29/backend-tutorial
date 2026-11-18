require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully!");
    })
    .catch((error) => {
        console.log("MongoDB Connection Failed:", error);
    });

const express = require('express');

const app = express();

app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));
app.post('/test', (req, res) => {
    res.send('POST is working!');
});

const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Hello! My Backend Server is Running.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

