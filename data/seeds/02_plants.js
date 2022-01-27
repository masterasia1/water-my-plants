
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("plants")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("plants").insert([
        { plant_name: "daffodil", species: "flower" },
        { plant_name: "tulip", species: "petal" },
        { plant_name: "rose", species: "stem" },
      ]);
    });
};