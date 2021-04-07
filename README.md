# Welcome to pispeedtest 👋
![VersionBadge](https://img.shields.io/badge/version-1.1.5-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/Tschoepel/pispeedtest/blob/master/LICENSE)
[![CodeQL](https://github.com/Tschoepel/pispeedtest/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/Tschoepel/pispeedtest/actions/workflows/codeql-analysis.yml)

> A simple project to install on a raspberry pi to measure internet speeds and display results.

![pispeedtest Screenshot](https://i.imgur.com/zgpErZn.png)
### 🏠 [Homepage](https://www.tschoepel.de/portfolio/pispeedtest/)

## Requirements
- NodeJS & npm for node server app.

## Installation

```sh
git clone https://github.com/Tschoepel/pispeedtest
cd pispeedtest
cp .env.example .env
npm i
```

## Configuration
Change the values in your .env file. DL and UL are in MBit/s.

## Running
Starts the NodeJS/Express server with nodemon:
```sh
npm install nodemon
npm run start
```
## Running on startup
To run the NodeJS/Express server on startup I would recommend using pm2:
```sh
yarn install -g pm2
cd pispeedtest
pm2 start ./bin/www.js
```

## Running the cronjob
To register the node script as a cronjob to run a daily speedtest at 00:00:
```
> crontab -e

0 0 * * * node "/home/user/path/to/pispeedtest/scripts/cron.js"
```

To run an hourly speedtest: (with user pi and pispeedtest in home folder)
```
> crontab -e

0 * * * * node "/home/pi/pispeedtest/scripts/cron.js"
```

## Copyright and license

&copy; Copyright 2021 - [Sebastian Tschöpel](https://www.tschoepel.de/). Code released under [the MIT license](https://github.com/Tschoepel/pispeedtest/blob/master/LICENSE).
