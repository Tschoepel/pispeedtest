# Welcome to pispeedtest 👋
<p>
  <img src="https://img.shields.io/badge/version-1.0.7-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/Tschoepel/pispeedtest/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> A simple project to install on a raspberry pi to measure internet speeds and display results.

![pispeedtest Screenshot](https://i.imgur.com/zgpErZn.png)

### 🏠 [Homepage](https://www.tschoepel.de/portfolio/pispeedtest/)

## Requirements
- Python3 & pip3 for cronjob.
- NodeJS & yarn/npm for node server app.

## Installation

```sh
git clone https://github.com/Tschoepel/pispeedtest
cd pispeedtest
pip3 install speedtest-cli python-dotenv --user
cp .env.example .env
yarn install --prod
```

## Configuration
Change the values in your .env file. DL and UL are in MBit/s.

## Running
Starts the NodeJS/Express server with nodemon:
```sh
yarn add nodemon
yarn start
```
## Running on startup
To run the NodeJS/Express server on startup I would recommend using pm2:
```sh
yarn global add pm2
cd pispeedtest
pm2 start ./bin/www.js
```

## Running the cronjob
To register the python script as a cronjob to run a daily speedtest at 00:00:
```
> crontab -e

0 0 * * * /usr/bin/python /home/user/path/to/pispeedtest/scripts/cron.py
```

To run an hourly speedtest:
```
> crontab -e

0 * * * * /usr/bin/python /home/user/path/to/pispeedtest/scripts/cron.py
```

## Copyright and license

&copy; Copyright 2019 - [Sebastian Tschöpel](https://www.tschoepel.de/).  Code released under [the MIT license](https://github.com/Tschoepel/pispeedtest/blob/master/LICENSE).
