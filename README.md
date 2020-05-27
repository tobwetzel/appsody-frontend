# appsody-node-demo-frontend

This demo is a simple node app representing a backend for a microservice.

It provides a web form to signup new users for a news letter

## Instructions

Check out this repo

run `npm install` to install the node dependencies

run `npm audit fix`  to fix any audit issues.

## Run demo locally

`npm start`

goto http://localhost:3000


Kill the server with `^C`

## Now appsodify the code

In the root of the application run

`appsody init incubator/nodejs-express none`

And then lauch the server again but this time through appsody. 

run `appsody run`

Go back to http://localhost:3000 Try to register a new user. 

Make sure you have the bakend application https://github.com/kabanero-demo/appsody-backend running and available on http://localhost:3001

Now you have the benefit of instrumentation added by the Appsody Stack:
- Application endpoint: http://localhost:3000/
- Health endpoint: http://localhost:3000/health
- Liveness endpoint: http://localhost:3000/live
- Readiness endpoint: http://localhost:3000/ready
- Metrics endpoint: http://localhost:3000/metrics
- Dashboard endpoint: http://localhost:3000/appmetrics-dash (development only)


