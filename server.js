const express = require('express'); //load express module ,  
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//log requests, tiny--> default 
app.use(morgan('tiny'));

//parse request body-parser
app.use(bodyparser.urlencoded({extended:true}))


//set view engine
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs")) if views is not same level with server.js, specific its path

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

 //specifit root route when the url match the root, / is the root 
app.get('/',(req,res)=>{           
    res.render('index');
})

app.get('/add-user',(req,res)=>{           
    res.render('add_user');
})

app.get('/update-user',(res,req)=>{
    res.render('update_user');
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)});