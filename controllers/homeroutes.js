const router = require('express').Router();
const {Post, User} = require('../models');


router.get('/', async (req, res) => {
  const postData = await Post.findAll({
    include: [{
      model: User,
      attributes: ['username']
    }
  ]
  }).catch((err) => { 
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


router.get('/post/:id', async (req, res) => {
  try{
   
    const postData = await Post.findOne(
      {
        where: {
          id: req.params.id,
        },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    console.log(postData)
    if (!postData) {
      res.status(404).json({ message: 'Post ID not found' });
      return;
    }

    const thePost =  postData.get({ plain:true });
    res.render('post', {thePost, loggedIn: req.session.loggedIn } );

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;
