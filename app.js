// const http = require('http');

// const server = http.createServer((req,res)=>{
//     console.log('Created server')
// })

// server.listen(5000);

const express = require('express');
const app = express();


const requestTime = function(req,res,next){
    req.requestTime = new Date;
    next();
}

app.use(requestTime);

app.get('/',function(req,res){
    var responseText = 'Hello World <br>';
    responseText += '<small>Requested at: ' + req.requestTime + '</small>';
    res.send(responseText)
})

app.listen(3000);