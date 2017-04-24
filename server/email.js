const nodemailer = require('nodemailer')
const secret = require('../.secrets')

module.exports = require('express').Router()
  .post('/', (req, res, next) => {
    sendEmail(req.body)
    res.send('Thank you for shopping with us!')
  })

function sendEmail(confirmationInfo) {
    // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: secret.user,
      pass: secret.pass
    }
  })

    // setup email data with unicode symbols
  let mailOptions = {
    from: '"Holiday Helper" <holidayhelperGHA@gmail.com>', // sender address
    to: confirmationInfo.email, // list of receivers
    subject: 'Order Confirmation', // Subject line
    text: `Congrats, ${confirmationInfo.name}! You just placed the best order of your life. Your awesome order will be shipped to:\n${confirmationInfo.address}\n\nIf we have any questions, we will call you at ${confirmationInfo.phone}.\n\nWith love,\nYour Holiday Helper`, // plain text body
    html: `<p>Congrats, ${confirmationInfo.name}! You just placed the best order of your life. Your awesome order will be shipped to:</p><p>${confirmationInfo.address}</p><p>If we have any questions, we will call you at ${confirmationInfo.phone}.</p><p>With love,</p><p>Your Holiday Helper</p>` // html body
  }

    // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message %s sent: %s %s', info.messageId, info.response, mailOptions.text)
  })
}
