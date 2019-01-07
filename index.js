const http = require('http');
const port = process.env.PORT || 5000;

const home = {
  "title": "Home",
  "header": "Easy, powerful, and fast",
  "content": "You don't have to be a programmer or spend months working on compliance to get started. We’ve taken care of it using popular and easy-to-use open source tools so you can get right to work."
};

const about = {
  "title": "About",
  "header": "Secure and scalable",
  "content": "Built on an approved and certified infrastructure with services from cloud.gov, your website will have the highest level of security and scalability."
};

http
  .createServer(function(req, res) {
    let status = 404;
    let data = { error: '404' };

    const content = /^\/home\/?$/.test(req.url) ? home :
      /^\/about\/?$/.test(req.url) ? about :
      null;

    if (content) {
      status = 200;
      data = content;
    }

    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  })
  .listen(port, function() {
    console.log('Listening on ' + port);
  });
