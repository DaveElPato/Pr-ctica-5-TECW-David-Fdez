var express = require('express');
var router = express.Router();


const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024 } });

const postController = require('../controllers/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DaveElBlog' });
});

//pagina autor
router.get('/author', (req, res, next) => {
  res.render('author');
})


// Tarea 3 Mostrar los posts
router.get('/posts', postController.index);



//tarea 4 autolod
router.param('postId', postController.load);

//attachment t5
router.get('/posts/:postId(\\d+)/attachment', postController.attachment);

//t6 por id

router.get('/posts/:postId(\\d+)', postController.show);

//creacion actualizacion etc t7
router.get('/posts/new', postController.new);

router.post('/posts', upload.single('image'), postController.create);

router.get('/posts/:postId(\\d+)/edit',  postController.edit);

router.put("/posts/:postId(\\d+)", upload.single('image'), postController.update)

//t8 borrar
router.delete('/posts/:postId(\\d+)',    postController.destroy);

module.exports = router;
