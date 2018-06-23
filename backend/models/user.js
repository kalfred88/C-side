const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['férfi', 'nő'],
    required: true,
  },
  height: {
    type: Number,
    required: false,
  },
  weight: {
    type: Number,
    required: false,
  },
  hairColor: {
    type: String,
    enum: ['világosbarna', 'sötétbarna', 'szőke', 'ősz', 'kopasz', 'fekete', 'vörös'],
    required: false,
  },
  eyeColor: {
    type: String,
    enum: ['barna', 'kék', 'zöld', 'fekete', 'szürke'],
    required: false,
  },
  hobbies: [{
    type: String,
    required: false,
  }],
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  lookingFor: {
    type: String,
    enum: ['férfi', 'nő', 'both'],
    required: true
  },
  active: {
    type: Boolean,
  },
  connections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
}, {
  timestamps: true,
});

userSchema.plugin(passportLocalMongoose, {
  maxAttempts: 5,
  hashField: 'password',
});

module.exports = mongoose.model('User', userSchema);