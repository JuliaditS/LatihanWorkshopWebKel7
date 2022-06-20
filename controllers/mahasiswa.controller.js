
const Mahasiswa = require('../models/Mahasiswa')
module.exports = {
  index : async (req,res) => {
    const mhs = await Mahasiswa.findAll();
    return res.render('mahasiswa/index',{
      mhs
    })
  },

  create : async (req,res) => {
    return res.render('mahasiswa/create')
  },

  store : async (req,res) => {
    const {nim,nama,kelas,jenis_kelamin} = req.body;
    await Mahasiswa.create({
      nim,
      nama,
      kelas,
      jenis_kelamin
    })
    return res.redirect('/mhs')
  },

  edit : async (req,res)  => {
    const {nim} = req.params;
    const mhs = await Mahasiswa.findByPk(nim);
    return res.render('mahasiswa/edit',{
      mhs
    })
  },

  update : async (req,res) => {
    const {nim} = req.params;
    const {nim1,nama,kelas,jenis_kelamin} = req.body;
    await Mahasiswa.update({
      nim1,
      nama,
      kelas,
      jenis_kelamin
    },{
      where : {nim}
    })
    return res.redirect('/mhs')
  },

  delete : async (req,res) => {
    const {nim} = req.params;
    await Mahasiswa.destroy({
      where : {nim}
    })
    return res.redirect('/mhs')
  }

}
