require("dotenv").config();
const express = require("express");
const config = require("./config");
const knex = require("knex")(config.db);
const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  projectId: "takashi-hosoi-project",
  keyFilename: "./server/gcpfile.json"
});

const bucketName = "pokemon-pics";

const app = express();

app.use(express.static("build"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => res.sendFile("./index.html"));
app.get("/pokedex", async (req, res) => {
  let pokedex = await knex("pokedex")
  .select()
  .then((pokemons) => res.send(pokemons))
  .catch((err) => {
    // sanitize known errors
    // TODO
    return Promise.reject(err);
  });
});
app.get("/skills", async (req, res) => {
  let pokedex = await knex("skills")
  .select()
  .then((skills) => res.send(skills))
  .catch((err) => {
    // sanitize known errors
    // TODO
    return Promise.reject(err);
  });
});
app.get("/pokemon/pictures/:id", async (req, res) => {
  let picture = await storage
  .bucket(bucketName)
  .file(req.params.id.padStart(4, "0") + ".png")
  .download()
  .then(picture => {
    res.send(picture);
    console.log(picture);
  })
  .catch((err) => {
    // sanitize known errors
    // TODO
    return Promise.reject(err);
  });
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Running a server at localhost:${PORT}`);
});

module.exports = app;