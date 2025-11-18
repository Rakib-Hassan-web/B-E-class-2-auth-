 const express = require('express');



 const app =express();
 app.use(express.json())


app.get ('/' ,(req ,res )=>{
    res.send('Hello world')
})


app.get ('/login' ,(req ,res )=>{

    console.log(req.body)
    res.send('Login successfull 22')
})



 app.listen(4000,()=>{

    console.log('surver running on port 4000  ')
 })