var knex = require('./knex.js');

function Users() {
  return knex('users');
}

// *** queries *** //

function getAll() {
  return Users().select();
}

function getSingle(userID) {
  return Users().where('id', parseInt(userID)).first();
}

function add(user) {
  return Users().insert(user, 'id');
}

function update(userID, updates) {
  return Users().where('id', parseInt(userID)).update(updates);
}

function deleteItem(userID) {
  return Users().where('id', parseInt(userID)).del();
}


module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteItem: deleteItem
};
