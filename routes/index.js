const express = require('express');

const {prueba, createAuthor, listAuthors, getSingleAuthor, updateAuthor, deleteAuthor, reactiveAuthor} = require('../controllers/authorController');

const {createPosts, listPost, getSinglePost, updatePost, deletePost, reactivePost} = require('../controllers/postController');

const router = express.Router();

//rutas de models/authors
router.get('/', prueba);

router.get('/authors', listAuthors);

router.post('/authors', createAuthor);

router.patch('/authors/reactive', reactiveAuthor); //Restful es cuando creas tareas en especifico para algo en especifico que está mas alla del CRUD

router.get('/authors/:id', getSingleAuthor);

router.patch('/authors/:id', updateAuthor);

router.delete('/authors/:id', deleteAuthor);

//rutas de models/posts
router.get('/posts', listPosts);
router.post('/posts', createPost);
router.patch('/posts/reactive', reactivePost);
router.get('/posts/:id', getSinglePost);
router.patch('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

//CRUD = Create Read Update Delete
module.exports = router;