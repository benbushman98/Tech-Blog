const router = require('express').Router();
const { Post, User, Comment } = require('../models');


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
  res.render('login', { layout: 'main2' })
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('dashboard');
    return;
  }
  res.render('signup', { layout: 'main2' })
});


// TA -- Taylor Hakes helped with this route.
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findOne(
      {
        where: {
          id: req.params.id
        },
        attributes: [
          'id',
          'title',
          'content',
          'date_created'
        ],
        include: [
          User,
          {
            model: Comment,
            include: [User],
          }
         
        ]
      })

    const thePost = postData.get({ plain: true });
    res.render('post', {
      thePost,
      loggedIn: req.session.loggedIn
    });
    console.log(thePost)

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;
