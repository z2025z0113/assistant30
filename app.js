const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('assistant.db')
db.run(`create table if not exists money_variation(
  id integer primary key autoincrement,
  thing text not null,
  money double default 0,
  happen timestamp not null
  )`)
  db.close()
app.use(express.static("public")); // Serves files from ./public/
// Serve index.html for root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
