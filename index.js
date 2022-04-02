require('dotenv').config()
const express = require('express')
const db = require('./src/config/db')
const routerUpload = require('./src/routes/imageRoute')


const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', routerUpload)

app.listen(3000, ()=>{
    console.log("App is running!")
})