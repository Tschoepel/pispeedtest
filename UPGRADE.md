# Upgrade Guide

```sh
cd pispeedtest
git pull && yarn --prod
```

## Upgrading To 1.1.0 From 1.0.x
### Breaking changes
- python, speedtest-cli and python-dotenv are no longer needed.
- npm module `speedtest-net` is now needed.
- cronjob will now need a node exec and the new path to the cron.js file.
