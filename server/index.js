const express = require("express");
const path = require("path");

const app = express();

const PORT = 4001;

app.use(express.static(path.join(__dirname, "public/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/build/index.html"));
});

app.listen(4001, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
