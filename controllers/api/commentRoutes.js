const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


// Create comment based upon the comment form
router.post('/', withAuth, async (req, res) => {
 
    try {
      const post = await Comment.create({
        comment: req.body.comment,
        user_id: req.session.user_id,
        post_id: req.body.post_id,
        
      });
      console.log(req.body);
      res.status(200).json(post);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
