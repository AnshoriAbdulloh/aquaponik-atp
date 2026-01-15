const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", require("./routes/userRoutes"));

// test server
app.get("/", (req, res) => {
  res.send("Server berjalan");
});

// run server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
