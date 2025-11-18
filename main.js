 
 
 const express = require('express');
 const app =express();
 app.use(express.json())


app.get ('/' ,(req ,res )=>{
    res.status(200).send('This is home page')
})

// ----------------------Login Part---------------

app.get ('/login' ,(req ,res )=>{

    const {Email , Password}=req.body;
   
    if(!Email) return res.status(400).send('Email is required')
    if(!Password) return res.status(400).send('Password is required')
        

    res.status(200).send('Login sucessfull')

})


// ------------------------Register Part---------------------

app.get('/register' ,(req ,res)=>{

    const { Name ,Email,Password,ConfirmPassword} =req.body

    console.log(req.body);

    if(!Name) return res.status(400).send('Name is required')
    if(!Email) return res.status(400).send('Email is required')
    if(!Password) return res.status(400).send('Password is required')
        if(!ConfirmPassword) return res.status(400).send('Confirm Password is required')
            if(Password != ConfirmPassword) return res.status(400).send('Passwords do not match')
                
    res.status(201).send('register Sucessfull')

})

// ------------------------Server Past-------------------

 app.listen(4000,()=>{

    console.log('surver running on port 4000  ')
 })