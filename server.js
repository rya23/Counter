require('dotenv').config();

const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require("mongoose");
const path = require('path');
const { logEvents, logger } = require('./middleware/logEvent')
const cors = require('cors');
const corsOptions = require('./config/corsOption')
const { error } = require('console');

const PORT = process.env.PORT || 3000;


const connectDB = require('./config/dbconnect');
connectDB();

//Middleware Logger
app.use(logger);


app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'view')));
app.use(express.json());

app.use('/add', require('./routes/api/counter'));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'index.html'))
})




mongoose.connection.once('open', () => {
    console.log('Connected to Database');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
})