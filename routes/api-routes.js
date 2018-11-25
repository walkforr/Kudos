const User = require('../models/User');
const Kudos = require('../models/Kudos');

module.exports = function (app) {

  app.post('/api/session', function (req, res) {
    User.find(req.body)
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

  //get all users
  app.get('/api/users', function (req, res) {
    User.find({}, function(err, users) {
      var userMap = {};

      users.forEach(function(user) {
        userMap[user._id] = user;
      });
      res.send(userMap);
    });
  });

  app.get('/api/user/:id', function (req, res) {
    User.find({_id: req.params.id})
    .populate('kudos')
    .then(function (data) {
      console.log('data', data)
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

  app.post('/api/user', function (req, res) {
    User.create(req.body)
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

  app.post('/api/kudos', function (req, res) {
    const userId = req.body.userId;
    const newEntry = {
      body: req.body.body
    }

    Kudos.create(newEntry)
      .then(function (kudosData) {
        return User.findOneAndUpdate({_id: userId}, { $set: { kudos: kudosData._id } }, { new: true });
    })
    .then(function(userData) {
      res.json(userData);
    })
    .catch(function (err) {
      res.json(err);
    });
  });
}