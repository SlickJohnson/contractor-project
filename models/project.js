const mongoose = require('mongoose');

const { Schema } = mongoose;

const Project = mongoose.model('Project', {
  title: String,
  description: String,
  content: String,
//   milestones: { type: Schema.Types.ObjectId, ref: 'Review' }, // TODO: Add milestones resource.
});

module.exports = Project;
