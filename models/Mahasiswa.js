const { DataTypes } = require('sequelize');
const db = require('../database');

const Mahasiswa = db.define('Mahasiswa', {
  nim: {
    type: DataTypes.STRING(8),
    primaryKey: true,
  },
  nama: DataTypes.STRING(50),
  kelas: {
    type: DataTypes.STRING(50),
  },
  jenis_kelamin:{
      type: DataTypes.STRING(8),
  }
});

module.exports = Mahasiswa;
