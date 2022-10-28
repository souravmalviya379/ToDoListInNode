const mongoose = require('mongoose');

//creating schema for ToDo
const toDoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    }
},
{
    timestamps: true
}
);

const ToDo = mongoose.model('ToDo', toDoSchema);

//exporting the schema
module.exports = ToDo;