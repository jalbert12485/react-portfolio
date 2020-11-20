const router = require('express').Router();
var nodemailer = require('nodemailer');

const genericController = require("../../controllers/genericController");

// Matches with "/api/generic"
router.route("/")
  .get(genericController.genericTest)

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER_NAME,
      pass: process.env.USER_PASSWORD
    }
  });

  router.post("/emailme", (req,res) =>{

    var mailOptions = req.body;
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });


module.exports = router;
