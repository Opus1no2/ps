const http = require('http')
const config = require('../config/config')

module.exports = (req, res) => {
  http.get(config.endpoint, (resp) => {
    resp.on('data', (chunk) => {
      res.send(chunk.toString());
    });
  }).on('error', (e) => {
    console.log(`Error: ${e.message}`);
  });
}
