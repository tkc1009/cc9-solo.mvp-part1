exports.up = function(knex, Promise) {
  return knex.schema.createTable("skills", (t) => {
    t.integer("id").primary();
    t.string("ename", 40).notNullable();
    t.string("jname", 40).notNullable();
    t.string("cname", 40).notNullable();
    t.string("type", 10).notNullable();
    t.string("category", 10).notNullable();
    t.integer("accuracy").nullable();
    t.integer("power").nullable();
    t.integer("pp").nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("skills");
};
