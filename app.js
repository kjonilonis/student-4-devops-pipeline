const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Full DevOps Pipeline Working - Student 4 🚀 Updated");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
