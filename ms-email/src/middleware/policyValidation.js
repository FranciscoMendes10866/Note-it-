const Joi = require('@hapi/joi')
const policy = {}



policy.validateSmtp = async (ctx, next) => {
    const schema = Joi.object({
        subject: Joi
            .string()
            .min(3)
            .max(30)
            .required(),

        message: Joi
            .string()
            .min(3)
            .max(300)
            .required(),

        email: Joi
            .string()
            .required()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'pt', 'com.pt', 'ch', 'us', 'es'] } })
    })

    const formData = {
        email: ctx.request.body.email,
        message: ctx.request.body.message,
        subject: ctx.request.body.subject
    }

    const { error, value } = schema.validate(formData);

    if (error) {
        switch (error.details[0].context.key) {
            case 'subject':
                ctx.throw(400, 'Incorrect subject')
                break
            case 'email':
                ctx.throw(400, 'Incorrect email')
                break
            case 'message':
                ctx.throw(400, 'Incorrect message')
                break
        }
    } else {
        next()
    }
}





module.exports = policy