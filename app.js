const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("assistant.db");
db.run(`create table if not exists money_variation(
  id integer primary key autoincrement,
  thing text not null,
  money double default 0,
  happen timestamp not null
  )`);
// db.run(`insert into money_variation(thing,money,happen) values(?,?,?)`,['buy 500g apple online',-28.62,'2025-6-28 20:27'])
// db.run(`insert into money_variation(thing,money,happen) values(?,?,?)`,['buy one piece of tofu',-3.2,'2025-06-29 09:26:28'])
db.close();
app.use(express.static("public")); // Serves files from ./public/
// Serve index.html for root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
