const skillsJSON = require("../settings/skills.json");

exports.seed = function(knex, Promise) {
  return knex("skills")
    .del()
    .then(() => {
      return knex("skills").insert(
        skillsJSON.map(skill => ({
          id: skill.id,
          ename: skill.ename,
          jname: skill.jname,
          cname: skill.cname,
          type: skill.type,
          category: skill.category,
          accuracy: skill.accuracy,
          power: skill.power,
          pp: skill.pp,
        }))
      );
    });
};
