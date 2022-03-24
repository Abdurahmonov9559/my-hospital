const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const csrf = require('csurf')
const cookieParser = require('cookie-parser')

const session = require('express-session') 
const MongoDBStore = require('connect-mongodb-session')(session) // !
const flash = require('connect-flash') // !

// router require
const usersRouter = require('./router/users') 
const pageRouter = require('./router/page')
const categoryRouter = require('./router/category')
const doctorsRouter = require('./router/doctors')
const botRouter = require('./router/bot')

let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  app.use(cors(corsOptions))
// middleware require
const varMiddle = require('./middleware/var') 
const auth = require('./middleware/auth')
const multer = require('./middleware/file')

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs'
})
app.engine('hbs',hbs.engine)
app.set('view engine','hbs')
app.set('views','views')

app.use(express.static('public'))
app.use('/uploads',express.static('uploads'))
app.use(express.urlencoded({extended:true}))
const MONGODB_URI = 'mongodb://127.0.0.1:27017/students'
let store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'session'
})
app.use(session({
    secret: 'laksjdhlkasjdhsakj',
    saveUninitialized:false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 10,
        secure: false 
    },
    resave:true,
    store
}))

app.use(csrf())
app.use(cookieParser())
app.use(flash())  // !
app.use(varMiddle)


app.use('/',pageRouter)
app.use('/users',usersRouter)
app.use('/category',categoryRouter)
app.use('/doctors',doctorsRouter)
app.use('/bot',botRouter)


async function dev(){
    try {
        await mongoose.connect(MONGODB_URI,{useNewUrlParser:true})
        app.listen(5000,()=>{
            console.log(`Server is running 5000`)
        })
    } catch (error) {
        console.log(error)
    }
}
dev()
