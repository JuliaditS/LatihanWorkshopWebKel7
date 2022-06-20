const indexController = require('../controllers/index.controller');
const postController = require('../controllers/post.controller');
const userController = require('../controllers/user.controller');
const mahasiswaController = require('../controllers/mahasiswa.controller');
const auth = require('../middlewares/auth');

const router = require('express').Router();

router.get('/', indexController.index);

router.get('/posts', postController.index);
router.get('/posts/create', postController.create);
router.post('/posts/store', postController.store);
router.get('/posts/edit/:id', postController.edit);
router.post('/posts/update/:id', postController.update);
router.get('/posts/delete/:id', postController.delete);

//users
router.get('/users', userController.index);
router.get('/users/create', userController.create);
router.post('/users/store', userController.store);
router.get('/users/edit/:id', userController.edit);
router.post('/users/update/:id', userController.update);
router.get('/users/delete/:id', userController.delete);
module.exports = router;

//Mahasiswa
router.get('/mhs', mahasiswaController.index);
router.get('/mhs/create', mahasiswaController.create);
router.post('/mhs/store', mahasiswaController.store);
router.get('/mhs/edit/:nim', mahasiswaController.edit);
router.post('/mhs/update/:nim', mahasiswaController.update);
router.get('/mhs/delete/:nim', mahasiswaController.delete);
module.exports = router;
