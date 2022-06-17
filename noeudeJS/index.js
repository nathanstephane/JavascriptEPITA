const { response } = require('express')
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const todoRouter = require('./routes/todo')

const app = express()
app.use(morgan('dev'))
app.use(express.json())

try{
     mongoose.connect('mongodb://localhost:27018/epita')
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

app.use('/todos', todoRouter)

const PORT = 4500

app.listen(PORT, ()=>{
    console.log('Server running on http://127.0.0.1:'+ PORT)
})