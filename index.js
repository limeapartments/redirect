module.exports = (req, res) => {
  res.writeHead(301, { 'Location': `https://limeapartments.com${req.url}` });
  res.end();
};
