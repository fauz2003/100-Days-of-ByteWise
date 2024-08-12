const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db');
const {errorHandler} = require('./middleware/errorHandler');
const cors = require('cors');

const port = process.env.PORT || 3000;

//DB connection
connectDB();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/chat', require('./routes/chatRoutes'));


//Error Handler
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`.bgCyan);
})