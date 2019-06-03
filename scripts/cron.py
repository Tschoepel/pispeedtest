#!/usr/bin/env python3

import sqlite3, speedtest, datetime

debug = False

def log(msg):
  if(debug):
    print(msg)

def saveData(ping, dl, ul):
  conn = sqlite3.connect('./database.db')
  c = conn.cursor()
  log("connection established")
  table = c.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='speeds'")
  if(c.fetchone() == None):
    c.execute('''CREATE TABLE speeds(date text, time text, ping real, dl real, ul real)''')
    log("table created")
  values = (datetime.datetime.today().strftime('%d.%m.%Y'),
    datetime.datetime.today().strftime('%H:%M'),
    ping, dl, ul)
  c.execute('INSERT INTO speeds VALUES (?,?,?,?,?)', values)
  log("values inserted")
  conn.commit()
  for row in c.execute('SELECT * FROM speeds'):
    log(row)
  conn.close()

s = speedtest.Speedtest()
s.get_best_server()
s.download()
s.upload()
res = s.results.dict()
saveData(round(res["ping"], 2), round(res["download"]/1000000, 2), round(res["upload"]/1000000, 2))