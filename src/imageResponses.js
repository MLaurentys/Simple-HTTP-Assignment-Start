const fs = require('fs');

const filename = './client/spongegar.png';

function getImage(req, res) {
  res.writeHead(200, { 'Content-Type': 'image/png' });
  const stream = fs.createReadStream(filename);
  stream.on('open', () => {
    stream.pipe(res);
  });
}

module.exports.getImage = getImage;
