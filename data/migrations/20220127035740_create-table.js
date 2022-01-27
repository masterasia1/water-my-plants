
exports.up = function(knex) {
    return knex.schema
    .createTable("users",tbl=>{
        tbl.increments("user_id")
        tbl.string("username",128).notNullable().unique()
        tbl.string("password",128).notNullable()
    })
    .createTable('plants', tbl =>{
        tbl.increments ('plant_id');
        tbl.text('plant_name').notNullable();
        tbl.text(`species`);
      })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('plants')
    .dropTableIfExists('users')
};

