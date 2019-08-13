const express = require("express");
const config = require("./config");
const knex = require("knex")(config.db);

const app = express();

app.use(express.static("build"));
app.get("/", (req, res) => res.sendFile("./index.html"));
app.get("/pokedex", async (req, res) => {
  let pokedex = await knex("pokedex")
  .select()
  .then((pokemons) => console.log(pokemons))
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