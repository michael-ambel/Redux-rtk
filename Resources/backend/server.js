const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
})

let tasks = [
    {id: 1, task: 'Create Redux app', completed: false},
    {id: 2, task: 'Set up project structure', completed: false},
    {id: 3, task: 'Install dependencies', completed: false},
    {id: 4, task: 'Create actions and reducers', completed: false},
    {id: 5, task: 'Connect Redux with React', completed: false},
    {id: 6, task: 'Test app functionality', completed: false}
];

app.get('/api/tasks', (req, res) => {
    res.json(tasks)
})

app.post('/api/tasks', (req, res) => {
    const newTask = {id: tasks.length+1, ...req.body, completed:false}
    tasks.push(newTask)

    console.log(tasks);
    res.json(newTask)
})

app.patch('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const i = tasks.findIndex(task => task.id === id)
    tasks[i].completed = req.body.completed

    res.json(tasks[i])
})

app.delete('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id)
    tasks = tasks.filter(task => task.id !== id)

    res.json({id})
})