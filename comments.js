//create a web server

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController'); // Corrected the import path

// Handle request to list comments
router.get('/', commentController.comment_list); // Corrected the route definition

// Handle request to show comment creation form
router.get('/create', commentController.comment_create_get);

// Handle submission of comment creation form
router.post('/create', commentController.comment_create_post);

// Handle request to delete a comment
router.get('/:id/delete', commentController.comment_delete_get);

// Handle deletion of a comment
router.post('/:id/delete', commentController.comment_delete_post);

module.exports = router;
