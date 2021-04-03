const express       = require('express')
const mongoose      = require('mongoose')
const morgan        = require('morgan')
const cors          = require('cors')
const createError = require('http-errors')
require('dotenv').config()

const PORT = 3000

const app = express()

// DB Connection
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
}, () => {
    console.log('Cloud Database Connected...')
})

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan('combined'))
app.use(cors())

app.get('/', (req, res) => {
    res.send({message: 'Welcome to Lima Smart server'})
})

// Error handling
app.use(async (req, res, next) => {
    next(createError.NotFound())
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})