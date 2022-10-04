const router = require('express').Router();
const {Post, User} = require('../models');


router.get('/', async (req, res) => {
  const postData = await Post.findAll().catch((err) => { 
    res.json(err);
  });
  const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', { posts, loggedIn: req.session.loggedIn });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('dashboard');
    return;
  }
  res.render('login', {layout: 'main2'}) 
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('dashboard');
    return;
  }
  res.render('signup', {layout: 'main2'}) 
});

router.get('/dashboard', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('login');
    return;
  }
  res.render('dashboard')
});


module.exports = router;
