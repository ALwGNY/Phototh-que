require('dotenv').config();
const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const path = require("path");
const albumRoutes = require("./routes/album.routes");


const app = express();

mongoose.connect("mongodb://localhost/phototheque");

app.get("/", (req, res) => {
  res.redirect("/albums");
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(fileUpload());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.set("trust proxy", 1);
app.use(
  session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash())

app.use("/", albumRoutes);

app.use((req, res) => {
  res.status(404);
  res.send("Page non trouvée");
});

app.listen(3000, () => {
  console.log("Appli lancé sur le port 3000");
});
