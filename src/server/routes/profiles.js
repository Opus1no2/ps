const http = require('http')

module.exports = (req, res) => {
  http.get('http://applicant.pointsource.us/api/testUser/57981d6ff62a2d8f3c05db76', (resp) => {
    resp.on('data', (chunk) => {
      res.send(chunk.toString());
    });
  }).on('error', (e) => {
    console.log(`Error: ${e.message}`);
  });
}
