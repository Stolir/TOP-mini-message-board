const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRoutes");
const assetsPath = path.join(__dirname, "public");

const app = express();
const PORT = 3000;

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
