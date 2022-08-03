const Todo = require('../models/Todo.js')

const postTodo =  (req, res) => { 
    let newTodo = new Todo({
        task: req.body.task
    })
    newTodo.save()
    .then(result => {
        res.json({
            data: newTodo,
            url: `/api/todos/${newTodo._id}`
        })
    })
    .catch(error => res.status(500).send(error));
}

const deleteTodo =  (req, res) => { 
    
    

  Todo.deleteOne({_id: req.params.id}).exec()
  .then(results => {
    res.json("Successfully deleted!!")
    })
    .catch(error => res.status(500).send(error));
    
}

const editTodo =  (req, res) => { 
    
    

    Todo.updateOne({_id: req.params.id},{task:req.body.task}).exec()
    .then(results => {
      res.json("Successfully updated!!")
      })
      .catch(error => res.status(500).send(error));
      
  }




const getTodos =  (req, res) => { 
    Todo.find({}).exec()
        .then(results => {
            res.json(results)
        })
        .catch(error => res.status(500).send(error));
}


const getTodo = (req, res) => { 
    Todo.findOne({ '_id': req.params.id }).exec()
    .then(results => {
        res.json(results)
    })
    .catch(error => res.status(500).send(error));
}


module.exports = {
    postTodo,
    getTodos,
    getTodo,
    deleteTodo,
    editTodo
}