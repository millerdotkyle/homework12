const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('homepage', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/post', async (req, res) => {
  res.render('post', {loggedIn: req.session.loggedIn,});
});

router.get('/login', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login', {loggedIn: req.session.loggedIn,});
});

router.get('/register', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('register', {loggedIn: req.session.loggedIn,});
});

router.get('/logout', (req, res) => {
  if(!req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('logout');
});

module.exports = router;
