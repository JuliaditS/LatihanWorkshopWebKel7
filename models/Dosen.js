const { DataTypes } = require('sequelize');
const db = require('../database');

const Dosen = db.define('Dosen', {
  nidn: {
    type: DataTypes.STRING(10),
    primaryKey: true,
  },
  nama_dosen: {
    type: DataTypes.STRING(50)
    },
  jenis_kelamin: {
    type: DataTypes.STRING(8),
  },
});

module.exports = Dosen;
