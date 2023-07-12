const isAuthenticated = (kindeClient) => async (req, res, next) => {
  try {
    const isAuthenticated = await kindeClient.isAuthenticated(req);
    if (!isAuthenticated) {
      return res.redirect('/');
    }
    next();
  } catch (e) {
    return res.redirect('/');
  }
};

module.exports = { isAuthenticated };