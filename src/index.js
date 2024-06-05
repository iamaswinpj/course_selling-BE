const express = require('express');
const connectDB = require("../config/db");
const userRouter = require("../routes/userRouter");
const cookieParser = require("cookie-parser");
const app = express()
const cors = require("cors");
const  instructorRouter  = require("../routes/instructorRouter");
const port = 3000;

// app.use(cors(
//   {origin:'http://localhost:5173'}
// ));

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user",userRouter);
app.use("/api/v1/instructor", instructorRouter);

connectDB();


app.get('/', (req, res) => {
  res.send('Hello World! New')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})