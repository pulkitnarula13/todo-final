const mongoose = require("mongoose")

const Schema = mongoose.Schema

//Creating the Todo Schema

const TodoSchema = new Schema({

    task: {
        type: String,
        minlength: 1,
        required: true
    },

})


//Exporting the Schema
const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo;
