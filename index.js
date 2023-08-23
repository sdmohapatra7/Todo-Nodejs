const express=require('express');
const app=express();
const port =5005;
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const db = require('./config/mongoose');
app.use(express.static('assets'));
// routers 
app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`The Servar is not working on ${port}`);
        return;
    }
    console.log(`The Servar is working on ${port}`);
    
})