module.exports = (req, res) => {
  res.writeHead(301, { 'Location': 'https://limeapartments.com' });
  res.end();
};
