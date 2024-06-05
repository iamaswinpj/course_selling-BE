const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 30,
  },
  hashPassword: {
    type: String,
    required: true,
    minLength: 5,
  },
  courses: [{ type: mongoose.Types.ObjectId, ref: "Course" }],
},

{ timestamps : true 

},
);

const User = mongoose.model("User", userschema);

module.exports = User;
