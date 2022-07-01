
const Tasks = require('../models/Tasks');

const getAllTasks =async (req,res)=> {
    try{
        const tasks = await Tasks.find({});
        res.json({
            code:200,
            data: tasks
        })

    }catch(error){
        res.status(500).json({msg:error});
    }
}

const createTask =async (req,res) =>{
    try{
        const task = await Tasks.create(req.body);
        res.status(201).json(req.body);
    }catch(error){
        res.status(500).json({msg:error});
    }
}
const getSingleTask =async (req,res)=> {
    try{
        const{ id: taskID } = req.params
        const task = await Tasks.find({_id:taskID});
        if(!task){
            res.status(500).json(`No task id found ${taskId}`)
        }
        res.status(201).json({task});
    }catch(error){
        res.status(500).json({msg:error});
    }
}

const deleteTask =async (req,res)=> {
    try{
        const{ id: taskID } = req.params
        const task = await Tasks.findOneAndDelete({_id:taskID});
        if(!task){
            res.status(500).json({msg:`No task id found ${taskId}`})
        }
        res.status(201).json('Task successfully deleted.');

    }catch(error){
        res.status(500).json({msg:error}); 
    }
}
const updateTask =(req,res)=> {
    try{
        const{ id: taskID } = req.params
        const task = await Tasks.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
          })
        res.status(201).json('Task successfully updated.');
    }catch(error){
        res.status(500).json({msg:error}); 
    }
}

module.exports={
    getAllTasks,
    createTask,
    getSingleTask,
    deleteTask,
    updateTask
}