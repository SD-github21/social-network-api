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

    // get a single thought by its id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.thoughtId })
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
    createThought({ body }, res) {
        console.log(body);
        Thought.create(body)
          .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: body.userId },
                { $push: { thoughts: _id } },
                { new: true}
            );
        })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

    // update a thought by its id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.thoughtId}, body, { new: true })
          .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!'});
                return;
            }
            res.json(dbThoughtData);
          })
          .catch(err => res.status(404).json(err));
    },

    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
          .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.statu(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
          })
          .catch(err => res.status(404).json(err));
    },

    // add a reaction
    addReaction({ params, body }, res) {
      console.log(body);
      Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $push: { reactions: body } },
        { new: true }
      )
       .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
       })
        .catch(err => res.json(err));
    },

    // remove a reaction
    removeReaction({ params }, res) {
      Thought.findOneAndUpdate(
        { _id: params.thoughtId},
        { $pull: { reactions: params.reactionId} },
        { new: true }
      )
       .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!'});
        }
        res.json(dbThoughtData);
       })
        .catch(err => res.json(err));
    }
};

module.exports = thoughtController;