const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, upload.single('image'), async (req, res) => {
  try {
    imageUrl = req.file.path.substring(6);
    const postData = await Post.create({
      user_id: req.session.userID,
      place_id: req.body.place_id,
      title: req.body.title,
      content: req.body.content,
      image: imageUrl
    });

    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//delete posts route
router.delete('/:id/delete', async (req, res) => {
  try {

    const postId = req.params.id;
    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    await post.destroy({
      where: {
        id: postId
      }
    });

    return res.status(200).json({ message: 'Post deleted', post });
  } catch (error) {
    console.error('Error deleting post:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});



module.exports = router;
