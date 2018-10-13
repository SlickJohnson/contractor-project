const Project = require('../models/project');

module.exports = (app) => {
  // INDEX
  app.get('/', (req, res) => {
    // Fetch the projects
    Project.find({ projectId: req.params.id }).then((projects) => {
      res.render('projects-index', { projects });
    });
  });

  // NEW
  app.get('/projects/new', (req, res) => {
    res.render('projects-new');
  });

  // CREATE
  app.post('/projects', (req, res) => {
    Project.create(req.body).then((review) => {
      console.log(review);
      res.redirect(`/projects/${req.params.projectId}`);
    }).catch((err) => {
      console.log(err.message);
    });
  });
}  