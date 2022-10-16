const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

// Displaying posts related to specific user
router.get('/', withAuth, async (req, res) => {
    try{
      const postData = await Post.findAll({
        where: {user_id: req.session.user_id},
      })
      const posts = postData.map((post) => post.get({ plain:true }));
      // console.log(posts);
      res.render('dashboard', { 
        posts,
        loggedIn: req.session.loggedIn 
      });
  } catch (err) {
    res.status(500).json(err);
  }
  });



  

module.exports = router;
