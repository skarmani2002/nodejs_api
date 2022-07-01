const mongoose = require('mongoose');

const TasksSchema = new mongoose.Schema({
    name:{
        type: String ,
        required: 'Must provide name',
        trim :true,
        maxlength:' name can not be more than 20 chracters'
    },
    completed:{
        type: Boolean,
        default:false
    }
});

const create = 
module.exports = mongoose.model('Tasks',TasksSchema);