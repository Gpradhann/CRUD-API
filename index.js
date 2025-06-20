const express = require('express');
const server = express();
const morgan = require('morgan');

const userRouter = require('./router/user')

//bodyparser
server.use(express.json());
server.use(morgan("default"));
server.use('/',userRouter.router)



server.listen(8080,()=>{
    console.log("server started")
});