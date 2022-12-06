require('dotenv').config();

const express = require('express')

const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const loginRoutes =  require('./routes/loginRoute')

const app = express()
app.use(express.json()) //to access req data like body params etc..
app.use((request,response,next)=>{
    console.log(request.path,request.method)
    next()
})
app.listen(process.env.PORT, () => {
    console.log("ruuning on port",process.env.PORT)
})

//db connect
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("db connected")
}).catch((error)=>{
    console.log(error)
})


//all routes

app.use('/api/create/user',userRoutes)

app.use('/api/user/login',loginRoutes)
