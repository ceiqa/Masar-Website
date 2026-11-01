const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, "public");

// Long cache for images, short for HTML/CSS/JS so edits show up quickly
app.use("/assets", express.static(path.join(PUBLIC, "assets"), { maxAge: "30d" }));
app.use(express.static(PUBLIC, { maxAge: "5m", extensions: ["html"] }));

// Blog posts live in public/blog/<slug>.html and are served at /blog/<slug>
// Anything else is a real 404, so search engines don't index stray URLs as copies of the home page
app.use((_, res) => res.status(404).sendFile(path.join(PUBLIC, "404.html")));

app.listen(PORT, () => console.log(`Masar running at http://localhost:${PORT}`));
