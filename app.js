const express = require('express');
const tasks = require('./routes/task');
const connectDB =require('./db/connect');
require('dotenv').config();
const app = express();
const port = 5001;


app.use(express.json());
 app.get('/',(req,res)=>{
     res.send("Welcome to task manager");
 })
 app.use('/api/v1/tasks',tasks);


/*app.get('ap1/v1/tasks');
app.get('ap1/v1/tasks/:id');
app.post('ap1/v1/tasks');
app.patch('ap1/v1/tasks/:id');
app.delete('ap1/v1/tasks/:id');*/


const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>console.log(`Server is listening ${port}`));

    } catch (error) {
        console.log(error);
    }
}
start();
