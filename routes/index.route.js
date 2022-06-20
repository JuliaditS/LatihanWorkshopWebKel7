const indexController = require('../controllers/index.controller');
// const postController = require('../controllers/post.controller');
// const userController = require('../controllers/user.controller');
const mahasiswaController = require('../controllers/mahasiswa.controller');
const dosenController = require('../controllers/Dosen.controller');
const matkulController = require('../controllers/Matkul.controller');
const auth = require('../middlewares/auth');

const router = require('express').Router();

router.get('/', indexController.index);

// router.get('/posts', postController.index);
// router.get('/posts/create', postController.create);
// router.post('/posts/store', postController.store);
// router.get('/posts/edit/:id', postController.edit);
// router.post('/posts/update/:id', postController.update);
// router.get('/posts/delete/:id', postController.delete);

//users
// router.get('/users', userController.index);
// router.get('/users/create', userController.create);
// router.post('/users/store', userController.store);
// router.get('/users/edit/:id', userController.edit);
// router.post('/users/update/:id', userController.update);
// router.get('/users/delete/:id', userController.delete);
// module.exports = router;

//Mahasiswa
router.get('/mhs', mahasiswaController.index);
router.get('/mhs/create', mahasiswaController.create);
router.post('/mhs/store', mahasiswaController.store);
router.get('/mhs/edit/:nim', mahasiswaController.edit);
router.post('/mhs/update/:nim', mahasiswaController.update);
router.get('/mhs/delete/:nim', mahasiswaController.delete);

//Dosen
router.get('/Dosens', dosenController.index);
router.get('/Dosens/create', dosenController.create);
router.post('/Dosens/store', dosenController.store);
router.get('/Dosens/edit/:nidn', dosenController.edit);
router.post('/Dosens/update/:nidn', dosenController.update);
router.get('/Dosens/delete/:nidn', dosenController.delete);

//Matkul
router.get('/matkuls', matkulController.index);
router.get('/matkuls/create', matkulController.create);
router.post('/matkuls/store', matkulController.store);
router.get('/matkuls/edit/:kode_matkul', matkulController.edit);
router.post('/matkuls/update/:kode_matkul', matkulController.update);
router.get('/matkuls/delete/:kode_matkul', matkulController.delete);
module.exports = router;
