const express = require("express");
const app = express();
require('dotenv').config()
const db = require('./db/connection.js')
const portNumber = process.env.PORT || 8080;

// Connection with MongoDB
db.once('open', ()=>{
    console.log('Successfully connected to database!')
    const server = app.listen(portNumber,()=>console.log("Listening to port 8080"));
})

// Static Middleware - Public Folder
app.use(express.static('public'));

// Parse JSON data sent from AXIOS
app.use(express.json());

// Parses the body of the request and allows us to access this data as key, value pairs
app.use(express.urlencoded({ extended: true }))



const router = require('./routes/todo.js');
app.use('/api', router);





// //Database schema 
// const { Todo } = require('./models/Todo')


// //API Routes

// app.post("/api/toDo", (req, res) => {
//     let todo = new Todo(req.body)
//     console.log("to do at server")
//     console.log(todo)
//     todo.save((error) => {
//       if (error) {
//         res.json(error)
//       } else {
//         res.json({ data: todo, message: "Todo task created successfully!!!!" })
//       }
//     })
// })

// // get ToDos

// app.get('/api/toDos', (req, res) => {
//     Todo.find({})
//     .exec((error, result)=>{
//         if(error){
//             res.send(500).json(error)
//         } else {
//             res.json(result)
//         }
//     })
// });


// // Delete API
