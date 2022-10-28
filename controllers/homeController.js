const Todo = require('../models/toDo');

module.exports.home = function(req, res){
    Todo.find({}, function(err, tasks){
        if(err){console.log('Error in finding tasks in db', err); return;}
        return res.render('home', {taskList: tasks});
    });
}