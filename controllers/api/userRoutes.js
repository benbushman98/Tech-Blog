const router = require('express').Router();
const { User } = require('../../models');

//SIGN-UP POST - THIS WORKS ✔️✔️
router.post('/', async (req, res) => {
    try {
      const userData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_id = userData.id;
        res.status(200).json(userData);
      });
  
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

//LOG-OUT POST - THIS WORKS ✔️✔️
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


module.exports = router;
