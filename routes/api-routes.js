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

  //populate kudos property on User model
  app.get('/api/users', function (req, res) {
    User.find({})
    .populate('kudos')
    .then(function (data) {
      console.log('data', data)
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

  //add new user to db
  app.post('/api/user', function (req, res) {
    User.create(req.body)
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

  //add new kudos post to db
  app.post('/api/kudos', function (req, res) {
    const newEntry = {
      to: req.body.to,
      from: req.body.from,
      body: req.body.body
    }

    Kudos.create(newEntry)
      .then(function (kudosData) {
        return User.updateMany(({ _id: req.body.to_id} || {_id: req.body.from_id }),
        {
            $push: {
                kudos: kudosData._id
            }

        });
})
    .then(function(userData) {
      res.json(userData);
    })
    .catch(function (err) {
      res.json(err);
    });
  });
}