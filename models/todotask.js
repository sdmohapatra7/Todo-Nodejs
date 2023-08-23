const mongoose=require('mongoose');

const todoScema=({

    checked:{ 
        type:Boolean,},
    task:{
        type:String,
        required:true,},
    crtegory:{
        type:String,
        required:true,},
    duedate:{
        type:String,
        required:true,}
});

const Todotask=mongoose.model('Todotask',todoScema);

module.exports=Todotask;