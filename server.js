const express = require("express");
const ytdl = require("ytdl-core");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/download", async (req, res) => {
  const url = req.query.url;
  if (!ytdl.validateURL(url)) {
    return res.status(400).send("Invalid YouTube URL");
  }
  res.header("Content-Disposition", 'attachment; filename="video.mp4"');
  ytdl(url, { format: "mp4" }).pipe(res);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
