const { response } = require('express')
const express = require('express')
const Router = express.Router()
const {v4: uuidv4} = require('uuid')


const todos = []

/**
  Todo:{
    id:1,
    label: "label test",
    isDone: true    
}
 */
Router.get('/', (request, response) =>{
  return  response.status(200).json(todos)
})

Router.post('/', (req, res)=>{
    const {todo} = req.body
    todo.id = uuidv4()
    todos.push(todo)
 return   res.status(200).json(todo)
})

 Router.put('/:index',(req, res) => {
     const {index} = req.params
    // const {test} = req.query
     

     const {isDone, label} = req.body
     
     if(typeof todos[index] != 'undefined'){
         if(typeof isDone != 'undefined'){
             todos[index].isDone =isDone
            }
         if(typeof label != 'undefined'){
             todos[index].label =label
            }
        }else {
            return res.status(500).json({"msg": "Todo not found!"})
        }

        return res.status(200).json(todo[index])
    })

    Router.delete('/:index', (req,res)=>{
        const {index} = req.params

        if(typeof todos[index] != 'undefined'){
            todos.splice(index,1)
            return res.status(200).json({"msg": "Todo well deleted!"})
           } else {
               return res.status(500).json({"msg": "Todo not found!"})
           }
    })
module.exports = Router //specify what we will send back when we will call this fi;e