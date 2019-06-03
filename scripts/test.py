#!/usr/bin/env python3

import sqlite3, speedtest, datetime, os, sys, time, random

os.chdir(sys.path[0])

debug = False

def log(msg):
  if(debug):
    print(msg)

def saveData(ping, dl, ul):
  conn = sqlite3.connect('../database.db')
  c = conn.cursor()
  log("connection established")
  table = c.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='speeds'")
  if(c.fetchone() == None):
    c.execute('''CREATE TABLE speeds(date text, time text, ping real, dl real, ul real)''')
    log("table created")
  values = (datetime.datetime.today().strftime('%d.%m.%Y'),
    datetime.datetime.today().strftime('%H:%M'),
    random.randint(10,20), random.randint(80,100), random.randint(30,40))
  c.execute('INSERT INTO speeds VALUES (?,?,?,?,?)', values)
  log("values inserted")
  conn.commit()
  for row in c.execute('SELECT * FROM speeds'):
    log(row)
  conn.close()

for x in range(20):
  saveData('ping', 'dl', 'ul')
  time.sleep(65)
