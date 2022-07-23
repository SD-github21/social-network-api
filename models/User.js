const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid e-mail address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
  },
  {
    toJSON: {
        virtuals: true
    },
    // set id to false because we don't need an id for virtuals
    id: false
  }
);

// get the total length of the user's friends array on query
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// create the User model using UserSchema
const User = model('User', UserSchema);

// export the User mode
module.exports = User;