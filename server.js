const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const users = require('./routes/api/users');
const auth  =  require('./routes/api/auth');
// const profile = require('./routes/api/profile');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/users', users);
app.use('/api/auth', auth);
// app.use('/api/profile', profile);



const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
