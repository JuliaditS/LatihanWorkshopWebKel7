
const Matkul = require('../models/Matkul')
const Dosen = require('../models/Dosen')
const mhs = require('../models/Mahasiswa')
module.exports = {
  index : async (req,res) => {
    const matkuls = await Matkul.findAll();
    return res.render('matkul/index',{
      matkuls
    })
  },

  create : async (req,res) => {
    const Dosens = await Dosen.findAll();
    const mhss = await mhs.findAll();
    return res.render('matkul/create',{
      Dosens,
      mhss
    })
  },

  store : async (req,res) => {
    const {kode_matkul,nama_matkul,nidn,nim} = req.body;
    await Matkul.create({
      kode_matkul,
      nama_matkul,
      nidn,
      nim
    })
    return res.redirect('/matkuls')
  },

  edit : async (req,res)  => {
    const {kode_matkul} = req.params;
    const matkuls = await Matkul.findByPk(kode_matkul);
    const Dosens = await Dosen.findAll();
    const mhss = await mhs.findAll();
    return res.render('matkul/edit',{
      matkuls,
      Dosens,
      mhss
    })
  },

  update : async (req,res) => {
    const {kode_matkul} = req.params;
    const {kode_matkul1,nama_matkul,nidn,nim} = req.body;
    await Matkul.update({
      kode_matkul1,
      nama_matkul,
      nidn,
      nim
    },{
      where : {kode_matkul}
    })
    return res.redirect('/matkuls')
  },

  delete : async (req,res) => {
    const {kode_matkul} = req.params;
    await Matkul.destroy({
      where : {kode_matkul}
    })
    return res.redirect('/matkuls')
  }

}
