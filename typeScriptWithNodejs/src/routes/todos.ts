import {Router} from 'express';

import {Todo} from '../models/todos'

type RequestBody = {text:string}
type RequestParams = {todoId:string}

let todos:Todo[] = [];
const router = Router();

router.get('/',(req,res,next)=>{
 res.status(200).json({todos:todos})
})

router.post('/todo',(req,res,next)=>{
    const body = req.body as RequestBody
const newTodo:Todo = {
    id:new Date().toISOString(),
    text: body.text
}

todos.push(newTodo)
res.status(201).json({message:'Added todos',todo:newTodo,todos:todos})
})


router.put('/todo/:todoId',(req,res,next)=>{
    const params = req.params as RequestParams
    const tid = params.todoId;
    
    const body = req.body as RequestBody
    const todoIndex = todos.findIndex((todoItem)=>todoItem.id===tid)
    if(todoIndex>=0){
        todos[todoIndex] = {id:todos[todoIndex].id,text:body.text};
    return res.status(200).json({message:'updated todo',todos:todos})
    }

    res.status(404).json({message:'could not find todo for this id.'})
})


router.delete('/todo/:todoId',(req,res,next)=>{
    const params = req.params as RequestParams
    const initialLength = todos.length;
    todos = todos.filter((todoItem)=>todoItem.id!==params.todoId);
    console.log(todos)
    if(todos.length === initialLength){
        return res.status(404).json({message:'Not found'})
    }
    res.status(200).json({message:'Deleted todo'})

})

export default router