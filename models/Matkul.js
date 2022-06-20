const { DataTypes } = require('sequelize');
const db = require('../database');
const Dosen = require('../models/Dosen')
const Mahasiswa = require('../models/Mahasiswa')

const Matkul = db.define('Matkul', {
  kode_matkul: {
    type: DataTypes.STRING(8),
    primaryKey: true
  },
  nama_matkul: DataTypes.STRING(50),
  nidn: {
    type: DataTypes.STRING(10),
    references: {
        model: Dosen, // 'Movies' would also work
        key: 'nidn'
    }
  },
  nim:{
      type: DataTypes.STRING(8),
      references: {
        model: Mahasiswa, // 'Movies' would also work
        key: 'nim'
      }
  }
});

Dosen.belongsToMany(Mahasiswa, { through: Matkul });
Mahasiswa.belongsToMany(Dosen, { through: Matkul });

module.exports = Matkul;
