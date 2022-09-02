const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index", { titulo: "inicio EJS" });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});