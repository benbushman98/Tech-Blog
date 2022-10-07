const router = require('express').Router();
const { Post } = require('../../models/');
const { User } = require('../../models/');
const withAuth = require('../../utils/auth');

// POST A NEW SURVEY - THIS WORKS ✔️✔️
router.post('/', withAuth, async (req, res) => {
  try {
    console.log("testing");
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

    res.status(200).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => { 
  try {
    const postData = await Post.destroy({ 
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
    
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try{
   
    const postData = await Post.findOne(
      {
        where: {
          id: req.params.id,
        },
      include: [
        {
          model: User,
          // attributes: ['username'],
        },
      ],
    });
    console.log(postData)
    if (!postData) {
      res.status(404).json({ message: 'Post ID not found' });
      return;
    }

    const survey =  postData.get({ plain:true });
    console.log(survey.option1)
    res.render('post', {loggedIn: req.session.loggedIn, layout: 'main2' } );

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;
