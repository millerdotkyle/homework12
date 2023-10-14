const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/newpost', withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      user_id: req.session.userID,
      title: req.body.title,
      content: req.body.content,
    });

    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;
