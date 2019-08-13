exports.up = function(knex, Promise) {
  return knex.schema.createTable("pokedex", (t) => {
    t.integer("id").primary();
    t.string("name_english", 20).notNullable();
    t.string("name_japanese", 20).notNullable();
    t.string("name_chinese", 20).notNullable();
    t.string("type1", 10).notNullable();
    t.string("type2", 10).nullable();
    t.integer("hp").notNullable();
    t.integer("atk").notNullable();
    t.integer("def").notNullable();
    t.integer("satk").notNullable();
    t.integer("sdef").notNullable();
    t.integer("spd").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("pokedex");
};
