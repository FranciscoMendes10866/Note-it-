const Koa = require('koa');
const BodyParser = require('koa-bodyparser')
const cors = require('koa-cors');
const morgan = require('koa-morgan')
const app = new Koa();


//using koa's body-parser
app.use(BodyParser())


//cors middleware
app.use(cors())


//koa-morgan access logs
app.use(morgan('combined'))


//routes middleware
const IndexRoutes = require('./routes/index.routes')
app.use(IndexRoutes.routes())



app.listen(process.env.PORT || 3000);