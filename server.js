const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var sendmail = require('sendmail')();

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
  console.log(req.body);
  // var contactEmail = req.body.email;
  // var contactMessage = req.body.message;
  // console.log(`Email: ${contactEmail} --- Message: ${contactMessage}`);
  // sendmail({
  //     from: 'appledes7@gmail.com',
  //     to: 'appledes7@yahoo.com',
  //     subject: '[*** Website Contact Form ***]',
  //     html: `<p>Reply To: ${contactEmail}</p><p>Message:</p><p>${contactMessage}</p>`,
  //   }, function(err, reply) {
  //     console.log(err && err.stack);
  //     console.dir(reply);
  // });
  // setTimeout(() => {
  //   res.redirect('/contact');
  // }, 3500);
});

app.listen(process.env.PORT || 4000, () => {
  console.log('Server started...')
});
