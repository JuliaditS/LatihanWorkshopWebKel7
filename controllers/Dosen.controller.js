
const Dosen = require('../models/Dosen')
module.exports = {
  index : async (req,res) => {
    const Dosens = await Dosen.findAll();
    return res.render('Dosen/index',{
      Dosens
    })
  },

  create : async (req,res) => {
    return res.render('Dosen/create')
  },

  store : async (req,res) => {
    const {nidn,nama_dosen,jenis_kelamin} = req.body;
    await Dosen.create({
        nidn,
        nama_dosen,
        jenis_kelamin
    })
    return res.redirect('/Dosens')
  },

  edit : async (req,res)  => {
    const {id} = req.params;
    const Dosens = await Dosen.findByPk(id);
    return res.render('Dosen/edit',{
      Dosens
    })
  },

  update : async (req,res) => {
    const {id} = req.params;
    const {nidn,nama_dosen,jenis_kelamin} = req.body;
    await Dosen.update({
        nidn,
        nama_dosen,
        jenis_kelamin
    },{
      where : {id}
    })
    return res.redirect('/Dosens')
  },

  delete : async (req,res) => {
    const {nidn} = req.params;
    await Dosen.destroy({
      where : {nidn}
    })
    return res.redirect('/Dosens')
  }

}
