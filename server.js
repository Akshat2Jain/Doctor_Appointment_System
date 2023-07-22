const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
//dotenv config

dotenv.config();

//mongo connection
connectDB();
// rest objects
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
// Use the cors middleware
app.use(cors());

// routes

// app.get("/", (req, res) => {
//   res.status(200).send({           // testing
//     message: "Server is running",
//   });
// });

app.use("/api/v1/user", require("./routes/userRoutes"));

//listen
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgBlue.black
  );
});
