var express = require('express');
var router = express.Router();

var queries = require('../db/queries');


// *** GET all users *** //
router.get('/users', function(req, res, next) {
  queries.getAll()
  .then(function(users) {
    res.status(200).json(users);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** GET single user *** //
router.get('/users/:id', function(req, res, next) {
  queries.getSingle(req.params.id)
  .then(function(user) {
    res.status(200).json(user);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** add user *** //
router.post('/users', function(req, res, next) {
  queries.add(req.body)
  .then(function(userID) {
    return queries.getSingle(userID);
  })
  .then(function(user) {
    res.json(user);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** update user *** //
router.put('/users/:id', function(req, res, next) {
  if(req.body.hasOwnProperty('id')) {
    return res.status(422).json({
      error: 'You cannot update the id field'
    });
  }
  queries.update(req.params.id, req.body)
  .then(function() {
    return queries.getSingle(req.params.id);
  })
  .then(function(user) {
    res.status(200).json(user);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** delete user *** //
router.delete('/users/:id', function(req, res, next) {
  queries.getSingle(req.params.id)
  .then(function(user) {
    queries.deleteItem(req.params.id)
    .then(function() {
      res.status(200).json(user);
    })
    .catch(function(error) {
      next(error);
    });
  }).catch(function(error) {
    next(error);
  });
});


module.exports = router;
