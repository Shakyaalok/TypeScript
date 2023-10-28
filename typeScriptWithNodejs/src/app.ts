import express from 'express'
import bodyParser from 'body-parser'
import todosROutes from './routes/todos'

const app = express();

app.use(bodyParser.json())
app.use(todosROutes)



app.listen(3000,()=>{
    console.log('connected')
})
