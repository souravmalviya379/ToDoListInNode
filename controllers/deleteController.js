const ToDo = require("../models/toDo");

module.exports.delete = function(req, res){
    // console.log(req.query);
    const ids = req.query.ids;
    const idArr = ids.split('%');
    idArr.pop();

    while(idArr.length != 0){
        let id = idArr.pop();
        ToDo.findByIdAndDelete(id, (err)=>{
            if(err){console.log(err); return res.send('Unable to delete')}

            console.log('Deleted!');
            
            setTimeout(()=>{
                return res.redirect('back');
            }, 500)
        });
    }
}