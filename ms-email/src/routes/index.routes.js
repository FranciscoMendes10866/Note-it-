const Router = require('koa-router');
const router = new Router();


const transControllers = require('../controllers/transactional')
const smtpControllers = require('../controllers/smtp')
const docs = require('../controllers/docs')
const policy = require('../middleware/policyValidation')




//register email
router.post('/api/v1/transactional', transControllers.index)

//contact form
router.post('/api/v1/smtp', policy.validateSmtp, smtpControllers.index)

//main route & docs
router.get('/', docs.docs)



module.exports = router;