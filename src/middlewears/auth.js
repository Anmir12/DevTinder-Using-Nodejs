const adminAuth = (req, res, next) => {
  const token = "xyz";

  const isAdminAuthorized = token === "xyz";

  if (!isAdminAuthorized) {
    res.status(401).send("admin authentication failed");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
    const token ="abc"
  const isUserAuthorized = token === "abc";

  if (!isUserAuthorized) {
    res.status(401).send("user authentication failed");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth
};
