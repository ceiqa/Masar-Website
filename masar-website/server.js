const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, "public");

// Long cache for images, short for HTML/CSS/JS so edits show up quickly
app.use("/assets", express.static(path.join(PUBLIC, "assets"), { maxAge: "30d" }));
app.use(express.static(PUBLIC, { maxAge: "5m", extensions: ["html"] }));

// Blog posts live in public/blog/<slug>.html and are served at /blog/<slug>
app.get("*", (_, res) => res.sendFile(path.join(PUBLIC, "index.html")));

app.listen(PORT, () => console.log(`Masar running at http://localhost:${PORT}`));
