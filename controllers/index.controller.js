module.exports = {
  index: async (req, res) => {
    const name = 'Kelompok 7';
    const title = 'HALO INI TITLE'
    return res.render('index', { name,title });
  },
};
