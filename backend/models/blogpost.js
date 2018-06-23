const mongoose = require('mongoose');

const ConversationSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  messages: [{
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    text: {
      type: String,
      required: true,
    }
  }],
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Conversation', ConversationSchema);