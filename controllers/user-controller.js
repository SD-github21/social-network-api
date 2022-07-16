const { User } = require('../models');

const userController = {
    // get all users
    getAllUser(req, res) {
        User.find({})
          .then(dbUserData => res.json(dbUserData))
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
    },

    // get one user by its id and populate thought and friend data
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
          .populate(['thoughts', 'friends'])
          .then(dbUserData => {
            // if no user is found, send 404
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
          })
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
    },

    // create a user
    createUser({ body }, res) {
        User.create(body)
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.status(400).json(err));
    },

    // update a user by its id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
          .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!'});
                return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.status(400).json(err));
    },

    // delete a user by its id
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
          .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
          })
           .catch(err => res.status(404).json(err));
    },

        // add a friend to a user
        addFriend({ params }, res) {
            User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { friends: params.friendId } },
                { new: true, runValidators: true})
              .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
              })
              .catch(err => res.status(400).json(err));
        },

        // delete a friend from a user
        deleteFriend({ params }, res) {
            User.findOneAndUpdate(
                { _id: params.userId},
                { $pull: { friends: params.friendId } },
                { new: true, runValidators: true})
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
        }
};



module.exports = userController;
