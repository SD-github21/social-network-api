const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// Set up GET one, PUT, DELETE at /api/thoughts/:thought/id
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// Set up POST, DELETE at /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction);


    module.exports = router;