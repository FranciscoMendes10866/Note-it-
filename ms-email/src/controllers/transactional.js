const MailJet = require('../config/mailJet.config')
const controller = {}



controller.index = async (ctx) => {
    //gets the form data
    const { email, username, password, website } = ctx.request.body

    //sets every info and builds the email structure
    const sendEmail = MailJet
        .post('send', { 'version': 'v3.1' })
        .request({
            'Messages': [
                {
                    'From': {
                        'Email': 'avizinhadochico@gmail.com',
                        'Name': website
                    },
                    'To': [
                        {
                            'Email': email,
                            'Name': username
                        }
                    ],
                    'Variables': {
                        'userEmail': email,
                        'userName': username,
                        'userPassword': password,
                        'websiteName': website
                    },
                    'TemplateLanguage': true,
                    'Subject': 'Welcome!',
                    'TextPart': 'Greetings!',
                    'HTMLPart':
                        '<h3>Dear user, welcome to <strong>{{var:websiteName}}</strong></h3><br/>May the organization force be with you!<br/><br/>Your account details are the following:<br/><br/>Email: {{var:userEmail}}<br/>Username: {{var:userName}}<br/>Password: {{var:userPassword}}<br/><br/>I hope you have a nice day!'

                }
            ]
        })
    //send it to MailJet
    sendEmail
        .then((result) => {
            console.log(result.body)
        })
        .catch((err) => {
            console.log(err.statusCode)
        })

}




module.exports = controller