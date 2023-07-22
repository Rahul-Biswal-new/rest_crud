// const express = require('express');
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = 5000 ;

import userRoutes from './routes/users.js';

app.use(bodyParser.json())

app.use('/users', userRoutes)


app.listen(PORT, ()=> console.log(`listening on port  http://localhost:${PORT}`))
