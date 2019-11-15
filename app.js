var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const http = require('http');
var url = require('url');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
    res.render('index', {
        static_path: 'static',
        theme: process.env.THEME || 'flatly',
        flask_debug: process.env.FLASK_DEBUG || 'false'
    });
});



    app.post('/signup', function(req, res) {
      var data = JSON.stringify(req.body)
      console.log(data)

      var options = {
        host: url.parse(process.env.APPSODY_BACKEND_DEFAULT_URL).hostname || 'host.docker.internal',
        port: url.parse(process.env.APPSODY_BACKEND_DEFAULT_URL).port || 3001,
        path: '/signup',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data)
        }
      };

      var backendreq = http.request(options, resp => {
        resp.setEncoding('utf8');
        let body = "";
        console.log(`statusCode: ${resp.statusCode}`)
        resp.on('data', (d) => {
          body += d;
        })
        resp.on('end', () => {
          console.log(resp.statusCode)
          res.status(resp.statusCode).send(body).end()
        })
      });

      backendreq.on('error', (error) => {
        console.log(error)
        res.status(backendreq.status).send(backendred.body).end()
      })

      backendreq.write(data)
      backendreq.end()

      console.log("done")
    });


// error handler
app.use(function(err, req, res, next) {
  console.log("error handler")
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err)
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports.app = app;
