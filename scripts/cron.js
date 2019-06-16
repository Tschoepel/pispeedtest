var speedTest = require('speedtest-net')

createTable()
var res = []
var i = 0
var max = 2
speedTester(i)
function speedTester(i) {
  if (i < max) {
    var test = speedTest({
      maxTime: 10000
    })
    test.on('error', err => {
      console.error(err)
    })
    test.on('data', data => {
      res.push([data.server.ping, data.speeds.download, data.speeds.upload])
      i = i + 1
      speedTester(i)
    })
  } else {
    var best = [99, 0, 0]
    res.forEach(function(data) {
      if (data[0] < best[0]) best[0] = data[0]
      if (data[1] > best[1]) best[1] = data[1]
      if (data[2] > best[2]) best[2] = data[2]
    })
    saveEntry(best[0], best[1], best[2])
  }
}
function createTable() {
  const sqlite3 = require('sqlite3').verbose()

  let db = new sqlite3.Database(__dirname + '/../database.db', err => {
    if (err) {
      return console.error(err.message)
    }
  })

  db.run(
    'CREATE TABLE IF NOT EXISTS speeds(date text, time text, ping real, dl real, ul real)',
    err => {
      if (err) {
        return console.log(err.message)
      }
    }
  )
  db.close(err => {
    if (err) {
      return console.error(err.message)
    }
  })
}
function saveEntry(ping, dl, ul) {
  const sqlite3 = require('sqlite3').verbose()

  let db = new sqlite3.Database(__dirname + '/../database.db', err => {
    if (err) {
      return console.error(err.message)
    }
  })
  var today = new Date()
  var dd = today.getDate()

  var mm = today.getMonth() + 1
  var yyyy = today.getFullYear()
  var hour = today.getHours()
  var min = today.getMinutes()
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  if (hour < 10) {
    hour = '0' + hour
  }
  if (min < 10) {
    min = '0' + min
  }
  if (min == 0) {
    min = '00'
  }
  let values = [
    dd + '.' + mm + '.' + yyyy,
    today.getHours() + ':' + today.getMinutes(),
    ping,
    dl,
    ul
  ]
  db.run('INSERT INTO speeds VALUES( ? , ? , ? , ? , ? )', values, function(
    err
  ) {
    if (err) {
      return console.log(err.message)
    }
  })

  db.close(err => {
    if (err) {
      return console.error(err.message)
    }
  })
}
