const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
const albumRoutes = require("../Photothèque/routes/album.routes");

const config = require("./config/config.json")

const app = express();

mongoose.connect("mongodb://localhost/phototheque");

app.get("/", (req, res) => {
  res.render("album", { title: "Album" });
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.set("trust proxy", 1);
app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use("/", albumRoutes);

app.use((req, res) => {
  res.status(404);
  res.send("Page non trouvée");
});

app.listen(3000, () => {
  console.log("Appli lancé sur le port 3000");
});
