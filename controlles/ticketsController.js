const TicketModel = require('../models/TicketModel')
var nodemailer = require('nodemailer');

exports.getAll = (req, res) => {
    TicketModel.find({}, (err, tickets)=>{ // find is like "select all"
        if (err){
            res.status(500).send('error')
        }  else {
        res.header('Content-Range', 'posts 0-20/20')
        res.status(200).send(tickets)
    }
    } )
}


exports.getById = (req, res) => {
    TicketModel.findOne({id: req.params.id}, (err, ticket)=>{ // find is like "select all"
        err ? res.status(500).send('error'):
        res.status(200).send(ticket)
    } )
}


exports.delete = (req, res) => {
    TicketModel.findOneAndDelete({id: req.params.id}, (err)=>{
    err ? res.send('error'):
    res.status(200).send('ticket deleted')
} )
}


exports.put = (req, res) => { 
    if(req.body.status !== "pending") {
        TicketModel.findOneAndUpdate({id: req.params.id},{$set: req.body}, (err, updatedticket)=>{
            err ? res.status(500).send('error'):
            sendEmailAfterPosting(req, res, true)
        } )
    } else {
        TicketModel.findOneAndUpdate({id: req.params.id},{$set: req.body}, (err, updatedticket)=>{
            err ? res.status(500).send('error'):
            res.status(200).send(updatedticket)
        } )
    }

}

exports.post = (req, res) => {

    const ticket = new TicketModel(req.body); 
    ticket.save().then(() => sendEmailAfterPosting(req, res, false))
    .catch(() => res.status(200).send('error while posting'))

}




sendEmailAfterPosting = (req, res, sign) => {

    var transporter = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
          user: process.env.ADMIN_EMAIL,
          pass: process.env.ADMIN_PASSWORD
        }
      });

      if (sign) {
        var mailOptions = {
            from: process.env.ADMIN_EMAIL,
            to: req.body.email,
            subject: `Regarding ticket number ${req.body.id}`,
            text: `Your ticket was ${req.body.status}. ${req.body.response}`
          };
      }
      
      if (!sign) {
        var mailOptions = {
            from: process.env.ADMIN_EMAIL,
            to: req.body.email,
            subject: 'confirmation mail',
            text: 'We have recieved your email. We will get back to you in 24 hours.'
          };
      }

    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          console.log("in email function error")
          res.status(500).send('error')
        } else {
          console.log('Email sent: ' + info.response);
          console.log("in email function good")
          res.status(200).send("email sent")
        }
      });


}