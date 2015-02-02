// app/routes.js
var tinderbot = require('tinderbot');
var client = new tinderbot();
var _ = require('underscore')

module.exports = function(app, passport) {

  // route for home page
  app.get('/', function(req, res) {
    res.render('index.hbs'); // load the index.ejs file
  });

  // route for showing the profile page
  app.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile.hbs', {
      user : req.user // get the user out of session and pass to template
    });
  });

  app.post('/fuckit', function (req, res) {
    client.FBClientId = req.user.facebook.id;
    client.FBClientSecret = req.user.facebook.token;
    client.mainLoop = function() {
      client.client.getRecommendations(10, function (error, data) {
        _.chain(data.results)
        .pluck('_id')
        .each(function (id) {
          console.log(id);
          client.client.like(id, function (error, data) {
            if (data.matched) {
              client.client.sendMessage(
                id,
                "Will fuck for foooood..."
              );
            }
          });
        });
      });
    }

    client.live();
  });

  // =====================================
  // FACEBOOK ROUTES =====================
  // =====================================
  // route for facebook authentication and login
  app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

  // handle the callback after facebook has authenticated the user
  app.get('/auth/facebook/callback',
          passport.authenticate('facebook', {
    successRedirect : '/profile',
    failureRedirect : '/'
  }));

  // route for logging out
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
