exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { username: "mark1", password: "12345" },
        { username: "mark2", password: "12345" },
        { username: "mark3", password: "12345" },
      ]);
    });
};