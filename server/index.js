const express = require('express')
const app = express()

const server = app.listen(3000, function(){
    console.log('listening ...')
})

const morgan = require('morgan')
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',require ('./api'))

