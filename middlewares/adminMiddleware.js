const jwt = require("jsonwebtoken");
const dotenv= require("dotenv");

dotenv.config();

function authenticateAdmin(req, res, next) {
  const token = req.cookies.token;

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    console.log(err);

    if (err) return res.sendStatus(403);

    req.user = user;

    console.log(req.user.role);
    
    if (req.user.role !== "admin") {
      return res.send("not authenticated");
    }
    next();
  });
}

module.exports = {authenticateAdmin};