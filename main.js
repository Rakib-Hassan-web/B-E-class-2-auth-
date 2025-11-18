 const express = require('express');
 const app =express();
 app.use(express.json())


app.get ('/' ,(req ,res )=>{
    res.send('This is home page')
})

// ----------------------Login Part---------------

app.get ('/login' ,(req ,res )=>{

    const {Email , Password}=req.body;
   
    if(!Email) return res.send('Email is required')
    if(!Password) return res.send('Password is required')
        

    res.send('This is login page ')

})


// ------------------------Register Part---------------------

app.get('/register' ,(req ,res)=>{

    const { Name ,Email,Password,ConfirmPassword} =req.body

    console.log(req.body);

    if(!Name) return res.send('Name is required')
    if(!Email) return res.send('Email is required')
    if(!Password) return res.send('Password is required')
    if(Password != ConfirmPassword) return res.send('Passwords do not match')
    if(!ConfirmPassword) return res.send('Confirm Password is required')

    res.send('register Sucessfull')

})

// ------------------------Server Past-------------------

 app.listen(4000,()=>{

    console.log('surver running on port 4000  ')
 })