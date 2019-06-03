var express = require('express')
var path = require('path')
var cors = require('cors')
var bodyParser = require('body-parser')
const fs = require('fs')

require('dotenv').load()

var app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: 'false'
  })
)

app.use(express.static(path.join(__dirname, 'dist')))

app.use('/api', (req, res) => {
  const sqlite3 = require('sqlite3').verbose()

  let db = new sqlite3.Database('./database.db', err => {
    if (err) {
      return console.error(err.message)
    }
  })

  db.all(`SELECT * FROM speeds ORDER BY date DESC, time DESC`, (err, rows) => {
    if (err) {
      console.error(err.message)
    }
    res.json(rows)
  })

  db.close(err => {
    if (err) {
      return console.error(err.message)
    }
  })
})

app.use('/min', (req, res) => {
  res.json({
    DL: process.env.MIN_DL,
    UL: process.env.MIN_UL
  })
})

app.use('*', (req, res) => {
  if (fs.existsSync(path.join(__dirname, './dist/index.html'))) {
    res.sendFile(path.join(__dirname, './dist/index.html'))
  } else {
    res.send(
      'Um diese Webanwendung nutzen zu können, führen Sie bitte zuerst "yarn build" aus.'
    )
  }
})

app.use(function(err, req, res) {
  console.log(err)

  if (req.app.get('env') !== 'development') {
    delete err.stack
  }

  res.status(err.statusCode || 500).json(err)
})

module.exports = app
