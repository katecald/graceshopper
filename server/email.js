const nodemailer = require('nodemailer')
const secret = require('../.secrets')

const renderCart = (cart) => {
  let orderTotal = 0
  let order = cart.reduce((str, product) => {
    orderTotal += product.price/100 * product.line_item.quantity
    return str + ` ${product.name} Package, $${product.price/100}, Quantity: ${product.line_item.quantity}<br/>`
  }, '')
  return order + `Order total: $${orderTotal}<br/>`
}

const sendEmail = (confirmationInfo, cart) => {
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
    // sender address
    from: '"Holiday Helper" <holidayhelperGHA@gmail.com>', 
    // list of receivers
    to: confirmationInfo.email, 
    // Subject line
    subject: 'Order Confirmation', 
    // plain text body
    text: `Congrats, ${confirmationInfo.name}! You just placed the best order of your life.
      \n${renderCart(cart).replace(/<br\/>/g, '\n')}\n
      \nYour awesome order will be shipped to:
      \n${confirmationInfo.address}\n
      \nIf we have any questions, we will call you at ${confirmationInfo.phone}.\n
      \nWith love,
      \nYour Holiday Helper`, 
    // html body
    html: `<p>Congrats, ${confirmationInfo.name}! You just placed the best order of your life.</p>
      <p>${renderCart(cart)}</p>
      <p>Your awesome order will be shipped to:</p>
      <p>${confirmationInfo.address}</p>
      <p>If we have any questions, we will call you at ${confirmationInfo.phone}.</p>
      <p>With love,</p>
      <p>Your Holiday Helper</p>` 
  }

    // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message %s sent: %s %s', info.messageId, info.response, mailOptions.text)
  })
}

module.exports = sendEmail
