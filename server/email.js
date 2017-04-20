const nodemailer = require('nodemailer')


module.exports = require('express').Router()
    .post('/', (req, res, next) => {
        sendEmail(req.body.email)
        res.send('Thank you for shopping with us!')
    })

function sendEmail(email) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail'
    })

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Holiday Helper" <hh@holidayhelper.com>', // sender address
        to: email, // list of receivers
        subject: 'Order Confirmation', // Subject line
        text: 'Congrats! You just placed the best order of your life.', // plain text body
        html: '<b>Hello world ?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}
