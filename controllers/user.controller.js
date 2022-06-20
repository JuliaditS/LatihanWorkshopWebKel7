
const User = require('../models/User')
module.exports = {
  index : async (req,res) => {
    const users = await User.findAll();
    return res.render('user/index',{
      users
    })
  },

  create : async (req,res) => {
    return res.render('user/create')
  },

  store : async (req,res) => {
    const {nama,password} = req.body;
    await User.create({
      nama,
      password
    })
    return res.redirect('/users')
  },

  edit : async (req,res)  => {
    const {id} = req.params;
    const users = await User.findByPk(id);
    return res.render('user/edit',{
      users
    })
  },

  update : async (req,res) => {
    const {id} = req.params;
    const {nama,password} = req.body;
    await User.update({
        nama,
        password
    },{
      where : {id}
    })
    return res.redirect('/users')
  },

  delete : async (req,res) => {
    const {id} = req.params;
    await User.destroy({
      where : {id}
    })
    return res.redirect('/users')
  }

}
