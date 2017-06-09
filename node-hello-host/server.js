      var express = require('express')
      var app = express()
      var os = require('os');
      const port = process.env.PORT || 8080;

      app.get('/', function (req, res) {
        res.send('Hello World from host ' + os.hostname() + '!')
      })

      app.listen(port, function () {
        console.log('Hello world app listening on port' + port + ' !')
      })