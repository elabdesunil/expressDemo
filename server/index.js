
const express = require ('express')
const app = express()

const morgan = require('morgan')
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended:true}))




app.use('/api', require('./api'));






const server = app.listen(3000,listening)


function listening(){

  console.log("listening")
}

app.use('/',express.static('./website'))


