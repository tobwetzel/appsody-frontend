## Notes for Kubecon
appsody init incubator/nodejs-express none

## Frontend
appsody run
## Backend
appsody run -p 3001:3000 -p 9230:9229

## Misc
appsody run --docker-options "--env-file .env"

# Appsody Operator

# Application Navigator
Edit `.appsody-config.yaml`
```
application-name: solution-startup
```
