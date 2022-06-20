module.exports = {
  index: async (req, res) => {
    const name = 'FAJAR';
    const title = 'HALO INI TITLE'
    return res.render('index', { name,title });
  },
};
