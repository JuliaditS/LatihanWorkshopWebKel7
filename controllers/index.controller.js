module.exports = {
  index: async (req, res) => {
    const name = 'Kelompok 7';
    const title = 'Workshop Web'
    return res.render('index', { name,title });
  },
};
