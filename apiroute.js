const express = require('express');
var nodemailer = require('nodemailer');
var app=express();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER_NAME,
    pass: process.env.USER_PASSWORD
  }
});


  app.post("/emailme",(req,res) =>{

    var mailOptions = req.body;

    console.log("Hello");
 
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });

module.exports = app;
