exports.seed = function(knex, Promise) {
  return knex('users').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('users').insert({
        name: 'Kalliope',
        opt: {}
      });
    }).then(function () {
      return knex('users').insert({
        name: 'Abigail',
        opt: {}
      });
    }).then(function () {
      return knex('users').insert({
        name: 'Lucinda',
        opt: {}
      });
    }).then(function () {
      return knex('users').insert({
        name: 'Elenore',
        opt: {}
      });
    });
};
