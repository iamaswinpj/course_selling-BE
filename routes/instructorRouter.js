const express = require("express");
const router = express.Router();
const {
  getCourses,
  createCourse,
  deleteCourse,
  updateCourse,
} = require("../controllers/courseController");
const {
  getAllInstructors,
  singin,
  singup,
} = require("../controllers/instructorController");
const upload = require("../middlewares/uploadMiddleware");
const authenticateInstructor = require("../middlewares/instructorMiddleware");
const authenticateAdmin = require("../middlewares/adminMiddleware");

// const instructorRouter = express.Router();
// authenticateAdmin,upload.single("image")

router.post("/signup", singup);

router.post("/signin", singin);

router.get("/get-courses", getCourses);

router.get("/get-instructors", getAllInstructors);

router.post( "/add-courses", createCourse);

router.put("/update-courses/:id", updateCourse);

router.delete("/delete-instructors/:id", deleteCourse);

module.exports = router;
