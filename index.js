const mongoose = require('mongoose')
mongoose.connect('mongodb://sanjeev:mypassword@mongodb:27017/mydb?authSource=admin')
  .then(()=>console.log('connected to mongodb'))
  .catch((err)=>console.log('error in connecting to mongodb : ', err))

const express = require('express')
const app = express()

app.get('/', (req, res)=>{
  res.send('<h1>Hello World</h1>')
})

app.listen(3000, ()=>{
  console.log('app listening on port 3000')
})