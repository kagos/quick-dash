
module.exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.json('opt');
    table.timestamps();
  });
};

module.exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
