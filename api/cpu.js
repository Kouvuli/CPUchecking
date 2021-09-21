module.exports = (req, res) => {
  if (req.methos === "GET") {
    res.json({
      body: req.body,
      query: req.query,
      cookies: req.cookies,
    });
  }
};
