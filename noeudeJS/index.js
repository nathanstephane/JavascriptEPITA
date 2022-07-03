const { response } = require('express')
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const todoRouter = require('./routes/todo')
const messageRouter = require('./routes/messageRoute')
const authRouter = require('./routes/authRoute')

const app = express()
app.use(morgan('dev'))
app.use(express.json())

app.use('/todos', todoRouter)
app.use('/messages', messageRouter)
app.use('/', authRouter)

try{
     mongoose.connect('mongodb://root:example@127.0.0.1:27018/test',{
        authSource:"admin",
        user:"root",
        pass:"example",
        useNewUrlParser:true,
        useUnifiedTopology: true
     })
     console.log('Connected to DB')
}catch (error){
    console.log("Error connection to DB: ",error)
}


app.get('/', (request, response)=>{
  return  response.status(200).json('it works!')
})


app.get('/test', (request, response)=>{
    return  response.status(200).json('it works on /test!')
})


app.post('/test',(request,response)=>{
//console.log(request.body)
const {name} = request.body

if(!name && name ==""){
   return response.status(500).json('You have to give a name')
}
return response.status(200).json(`My name is ${name}`)

})



const PORT = 4500

app.listen(PORT, ()=>{
    console.log('Server running on http://127.0.0.1:'+ PORT)
})