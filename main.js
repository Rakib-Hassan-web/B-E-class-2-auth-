 const express = require('express');

 const app =express();


app.get ('/' ,(req ,res )=>{
    res.send('hello world for mr')
})


 app.listen(4000,()=>{

    console.log('surver running on port 4000 ')
 })