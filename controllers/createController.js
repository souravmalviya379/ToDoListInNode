const Todo = require('../models/toDo');

module.exports.create = function(req, res){
    Todo.create({
        description: req.body.taskName,
        category: req.body.category,
        dueDate: req.body.dueDate
    }, function(err, task){
        if(err){console.log('Error in creating task'); return;}
        console.log(task);
        return res.redirect('back');
    });
}