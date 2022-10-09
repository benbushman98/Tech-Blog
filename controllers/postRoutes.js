const router = require('express').Router();
const { Post, User } = require('../models');

router.get('/:id', async (req, res) => {
    if (req.session.loggedIn) {
      try {
        const postData = await Post.findOne(
          {
            where: {
              id: req.params.id,
            },
            attributes: [
              'id',
              'title',
              'date_created',
              'content',
            ],
            include: [{
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
  
        const thePost = postData.get({ plain: true });
        res.render('post', { thePost, loggedIn: req.session.loggedIn });
  
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    } else {
      res.redirect('login')
    }
  })

  module.exports = router;