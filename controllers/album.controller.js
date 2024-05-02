const Album = require("../models/Album");

const createAlbumForm = (req, res) => {
  res.render("new-album", { title: "Nouvel album" });
};
const createAlbum = async (req, res) => {
  try {
    await Album.create({
      title: req.body.albumTitle,
    });
    res.redirect("/");
  } catch (err){
    res.redirect("/")
  }
};

module.exports = {
  createAlbumForm,
  createAlbum,
};
