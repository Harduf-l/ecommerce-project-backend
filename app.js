const express = require('express')

const userRouter = require('./routes/usersRoute')
const productRouter = require('./routes/productsRoute')
const postsRouter = require('./routes/postsRoute')
const commentsRouter = require('./routes/commentsRoute')
const ordersRouter = require('./routes/ordersRoute')
const productsReviewRouter = require('./routes/productReviewRoute')

const ticketsRouter = require('./routes/ticketRoute')

const helmet = require('helmet')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
require('dotenv').config()

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range')
    res.setHeader('Content-Range', 'bytes : 0-9/*')
    next()
})

app.use(helmet.xssFilter());

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

var mongoDB = process.env.ATLAS_URI
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("mongoDB connection established successfully")
})


app.use('/users', userRouter )
app.use('/products', productRouter )
app.use('/posts', postsRouter )
app.use('/comments', commentsRouter )
app.use('/orders', ordersRouter )
app.use('/reviews', productsReviewRouter )
app.use('/tickets', ticketsRouter )

app.listen(process.env.PORT || 5000)
