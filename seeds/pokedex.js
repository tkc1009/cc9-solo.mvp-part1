const pokedexJSON = require("../settings/pokedex.json");

exports.seed = function(knex, Promise) {
  return knex("pokedex")
    .del()
    .then(() => {
      return knex("pokedex").insert(
        pokedexJSON.map(pokemon => ({
          id: pokemon.id,
          name_english: pokemon.name.english,
          name_japanese: pokemon.name.japanese,
          name_chinese: pokemon.name.chinese,
          type1: pokemon.type[0],
          type2: pokemon.type[1] || null,
          hp: pokemon.base["HP"],
          atk: pokemon.base["Attack"],
          def: pokemon.base["Defense"],
          satk: pokemon.base["Sp. Attack"],
          sdef: pokemon.base["Sp. Defense"],
          spd: pokemon.base["Speed"],
        }))
      );
    });
};
