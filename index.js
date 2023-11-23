const express = require('express');
const app = express();
const port = process.env.PORT || 8080 ;
const connect = require('./db/mongoDB');
const morgan = require('morgan')
const USER_ROLE = require('./model/userRoleModel')
const userRouter = require('./router/userRouter')
const cors = require('cors');



// middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// API's

app.use('/',userRouter)

// home page route
app.get('/', (req, res) =>{
    res.send('welcome home')
  })
  

// dd connection and  server
connect()
 .then(()=>{
  try{
    app.listen(port,()=>console.log(`server connected to http://localhost:${port}`))
  }catch(error){
    console.log('cannot connect to the server');
  }
 })