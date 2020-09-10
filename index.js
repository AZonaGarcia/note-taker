var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", function (req, res) {
    res.json(path.join(__dirname, "./public/notes.html"));
});

app.post("/api/notes", function(req, res) {
    // Empty out the arrays of data
    tableData.length = 0;


    res.json({ ok: true });
  });

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  