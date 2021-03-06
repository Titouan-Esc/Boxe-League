const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const userRoutes = require('./routes/user.route');
const cardsRoutes = require('./routes/cards.route');
const adminRoutes = require('./routes/admin.route');
const mmaRoutes = require('./routes/mma.routes');


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
    origin : ['http://localhost:8000', 'http://localhost:3001', 'http://localhost:3000']
}));

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/cards', cardsRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/mma', mmaRoutes);


app.listen(8000);