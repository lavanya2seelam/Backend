const express = require('express')
const app = express()
require('dotenv').config()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('This is Twitter')
})

app.get('/login',(req,res)=>{
    res.send('This is login')
})

app.get('/youtube',(req,res)=>{
    res.send('<h1>This is Youtube<h1>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})