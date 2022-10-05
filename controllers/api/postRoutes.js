const router = require('express').Router();
const { Post } = require('../../models/');
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

module.exports = router;
