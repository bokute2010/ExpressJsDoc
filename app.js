// const http = require('http');

// const server = http.createServer((req,res)=>{
//     console.log('Created server')
// })

// server.listen(5000);

const express = require('express');
const app = express();

const myLogger = (req,res,next)=>{
    console.log('Logged');
    next();
}
app.use(myLogger);

app.get('/',function(req,res,next){
    res.send("Hello world !")
    next();
})



app.listen(3000);