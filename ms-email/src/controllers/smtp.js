const sgMail = require('../config/sendGrid.config')
const controller = {}



controller.index = async (ctx) => {
    //gets the data from the frontend
    const { email, subject, message, websiteEmail } = ctx.request.body
    //stores the data
    const info = {
        to: websiteEmail,
        from: email,
        subject: subject,
        text: message,
        html: message
    }
    //sends the email
    sgMail.send(info)
}




module.exports = controller