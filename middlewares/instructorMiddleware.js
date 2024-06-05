const jwt = require ("jsonwebtoken");
const dotenv = require ("dotenv");

dotenv.config();

function authenticateInstructor(req, res, next) {
  const token = req.cookies.token;

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    console.log(err);

    if (err) return res.send("Token not valid or missing").status(403);

    console.log(req.user.role);
    if (req.user.role !== "instructor" && req.user.role !== "admin") {
      return res.send("not authenticated");
    }
    next();
  });
}

module.exports ={ authenticateInstructor};