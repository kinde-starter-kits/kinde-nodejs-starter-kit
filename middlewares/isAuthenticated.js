const isAuthenticated = (client) => async (req, res, next) => {
  if(!client.isAuthenticated(req)){
    return res.redirect('/login');
  };
  return next();
};

module.exports = { isAuthenticated };