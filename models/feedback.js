const mongoose = require('mongoose');

const { Schema } = mongoose;

const Feedback = mongoose.model('Feedback', {
  title: String,
  content: String,
  projectId: { type: Schema.Types.ObjectId, ref: 'Project' },
});

module.exports = Feedback;
