const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();

const PORT = 4001;

app.use(express.static(path.join(__dirname, "public/build")));

app.get("/auth/oauth", (req, res, next) => {
  // This route is callback for making app test
  const { code } = req.query;
  console.log("code:", code);

  res.end();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/build/index.html"));
});

app.listen(4001, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
