const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const {errorHandler} = require('../backend/middleware/errorHandler.js');
const colours = require('colours');
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const connectDB = require('./config/db.js');

connectDB();

const port = process.env.PORT || 5000;
app.use(cors());
app.use('/api/goal/', require('./routes/goalRoutes'));
app.use('/api/user/', require('./routes/userRoutes.js'));

app.use(errorHandler);

app.listen(port, (res, req)=>{
    console.log(`Server is listening on port ${port}`);
})