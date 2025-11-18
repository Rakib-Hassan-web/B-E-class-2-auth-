 const express = require('express');

 const app =express();


app.get ('/' ,(req ,res )=>{
    res.send('Hello world')
})


app.get ('/login' ,(req ,res )=>{
    res.send('Login successfull 22')
})



 app.listen(4000,()=>{

    console.log('surver running on port 4000 ')
 })