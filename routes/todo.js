const router = require('express').Router();

const { getTodos, getTodo, postTodo, deleteTodo,editTodo} = require('../controllers/todoController.js')

router.get('/', getTodos);
router.get('/:id', getTodo);
router.post('/', postTodo);
router.delete('/:id', deleteTodo);
router.put('/:id', editTodo);

module.exports = router;