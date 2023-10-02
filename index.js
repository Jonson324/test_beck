import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose
    .connect('mongodb+srv://<admin>:<wwwwww>@cluster0.xm1y4vl.mongodb.net/')
    .then(() => console.log('db okey'))
    .catch((err) => console.log('failed',err))
    
const app = express();

app.use(express.json());

app.get('/',(req,res) => {
    res.send('hello world');
});

app.listen(4444, (err) => {
    if(err){
        return console.log('err');
    }

    console.log('server ok');
    
});
