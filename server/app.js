const express     = require('express')
const mongoose    = require('mongoose')
const morgan      = require('morgan')
const cors        = require('cors')

const PORT = 3000

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan('combined'))
app.use(cors())

app.get('/', (req, res) => {
    res.send({message: 'Welcome to Lima Smart server'})
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})