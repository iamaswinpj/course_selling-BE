const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();

const secret_key = process.env.SECRET_KEY;

const generateToken = (email) => {
  return jsonwebtoken.sign({ data: email }, secret_key, {expiresIn: "1d",});
};

 const adminToken = (user) => {
  return jsonwebtoken.sign({ data: user.id, role: user.role }, secret_key, {
    expiresIn: "1d",
  });
};

module.exports ={ generateToken,adminToken};