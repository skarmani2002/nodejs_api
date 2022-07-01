const mongoose = require('mongoose');
const connectionString = "mongodb+srv://amrani:admin12345@nodeapiproject.hsvevi6.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";
const ConnectDB =(url)=>{
return mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})

}
module.exports = ConnectDB;
