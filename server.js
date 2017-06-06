const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

// app.use(forceSSL());

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.post('/contact', (req, res) => {
  var contactEmail = req.body.email;
  var contactMessage = req.body.message;
  console.log(`Email: ${contactEmail} --- Message: ${contactMessage}`);
});

app.listen(process.env.PORT || 4000, () => {
  console.log('Server started...')
});
