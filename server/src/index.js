const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors');
app.use(cors());


app.use(express.static(path.join(__dirname, '../../client/dist')))


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/dist'))
})

app.listen(3000, ()=>console.log('now listing on http://localhost:3000/'))

