const controller = {}




controller.docs = async (ctx) => {
    ctx.body = {
        name: 'micro-service-email',
        author: 'Francisco Mendes',
        tech: 'Node.js',
        package_manager: 'yarn',
        framework: 'Koa.js',
        ES: '8',
        production_process_manager: 'PM2',
        CMD: 'yarn serve',
        services: {
            SMTP: {
                service_name: 'SendGrid',
                use_case: 'contact form',
                what_you_get: 'a standard email',
                endpoint: '/api/v1/smtp',
                method: 'POST',
                data_needed: {
                    websiteEmail: 'your website/company email',
                    email: 'yourEmail@example.com',
                    subject: 'example subject',
                    message: 'this is the body message',
                },
            },
            Transactional: {
                service_name: 'MailJet',
                use_case: 'register form',
                what_you_get: 'an email with your account details',
                endpoint: '/api/v1/transactional',
                method: 'POST',
                data_needed: {
                    website: 'your website name',
                    email: 'your email account',
                    username: 'your username',
                    password: 'your password',
                },
            },
        },
        deploy: 'docker',
        host: 'heroku container registery'
    }
}





module.exports = controller