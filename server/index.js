const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const userRoutes = require('./routes/user.route');

require('dotenv/config');

mongoose.connect(
    process.env.DB_CONNECTION, 
    {useNewUrlParser : true, useUnifiedTopology : true}, 
    () => {
    return console.log('Connecté à MongoDB')
})


const app = express();

app.use(cookieParser());
app.use(cors({
    credentials : true,
    origin : ['http://localhost:8000', 'http://localhost:3001']
}));

app.use(express.json());

app.use('/api/user', userRoutes);

app.listen(8000);