const Feedback = require('../models/feedback');

module.exports = (app) => {
  // CREATE Feedback
  app.post('/projects/:id/feedback', (req, res) => {
    Feedback.create(req.body).then((feedback) => {
      res.redirect(`/projects/${feedback.projectId}`);
    }).catch((err) => {
      console.log(err.message);
    });
  });

  // DELETE
  app.delete('/projects/feedback/:id', (req, res) => {
    Feedback.findByIdAndRemove(req.params.id).then((feedback) => {
      res.redirect(`/projects/${feedback.projectId}`);
    }).catch((err) => {
      console.log(err.message);
    });
  });
};
