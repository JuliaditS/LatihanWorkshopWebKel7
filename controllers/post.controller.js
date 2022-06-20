
const Post = require('../models/Post')
module.exports = {
  index : async (req,res) => {
    const posts = await Post.findAll();
    return res.render('post/index',{
      posts
    })
  },

  create : async (req,res) => {
    return res.render('post/create')
  },

  store : async (req,res) => {
    const {title,content} = req.body;
    await Post.create({
      title,
      content
    })
    return res.redirect('/posts')
  },

  edit : async (req,res)  => {
    const {id} = req.params;
    const posts = await Post.findByPk(id);
    return res.render('post/edit',{
      posts
    })
  },

  update : async (req,res) => {
    const {id} = req.params;
    const {title,content} = req.body;
    await Post.update({
      title,
      content
    },{
      where : {id}
    })
    return res.redirect('/posts')
  },

  delete : async (req,res) => {
    const {id} = req.params;
    await Post.destroy({
      where : {id}
    })
    return res.redirect('/posts')
  }

}
