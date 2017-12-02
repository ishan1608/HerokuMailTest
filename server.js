var http = require('http');

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

http.createServer(function(req, res) {
	var transporter = nodemailer.createTransport({
	  service: 'Hotmail',
	      auth: {
	          user: 'tempexp@outlook.com',
	          pass: '7l1yrQ003Q48'
	      }
	  });
	   transporter.sendMail({
	      from: 'tempexp@outlook.com',
	      to: 'ishan1608@live.com',
	      subject: 'Mail using heroku',
	      text: 'This mail is send using nodemailer on heroku.',
	      html: '<p>This mail is send using <b>nodemailer</b> on <b>heroku</b></p>'
	  }, function(err, response){
			console.log('Mail sending done :');
			console.dir(err);
			console.dir(response);
			res.writeHead(200, {'Content-Type': 'text/plain'});
			if (err) {
				res.end('Mail not sent\n\nError :\n' + JSON.stringify(err) + '\n\nResponse :\n' + JSON.stringify(response));
			} else {
				res.end('Mail sent successfully\n\nError :\n' + JSON.stringify(err) + '\n\nResponse :\n' + JSON.stringify(response));
			}
	  });
}).listen(Number(process.env.PORT || 8080));
console.log('Server started at port ' + Number(process.env.PORT || 8080));
