const { User, Thought } = require('../models');

const thoughtController = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
          .then(dbThoughtData => res.json(dbThoughtData))
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // get a single through by its id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
          .then(dbThoughtData => {
            // if no thought is found, send 404
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id' });
                return;
            }
            res.json(dbThoughtData);
          })
          .catch(err => {
            console.log(err);
          });
    },

    // create a thought
    create



}