const router = require('express').Router();
const {Post, User} = require('../models');
// const withAuth = require('../utils/auth');


// router.get('/', async (req, res) => {
//   try{
//     const postData = await Post.findAll({
//       where: {user_id: req.session.user_id}
//     }).catch((err) => {
//       res.json(err);
//     });
//     const posts = postData.map((post) => post.get({ plain:true }));
//     console.log(posts);
//     res.render('homepage', { 
//       posts,
//     });
// } catch (err) {
//   // res.status(500).json(err);
// }
// });

router.get('/', async (req, res) => {
  const postData = await Post.findAll().catch((err) => { 
    res.json(err);
  });
  const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', { posts, loggedIn: req.session.logged_in });
});


module.exports = router;
