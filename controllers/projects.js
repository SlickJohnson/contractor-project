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
    Project.create(req.body).then((project) => {
      console.log(project);
      res.redirect(`/projects/${project._id}`);
    }).catch((err) => {
      console.log(err.message);
    });
  });

  // SHOW
  app.get('/projects/:id', (req, res) => {
    // Find project
    Project.findById(req.params.id).then((project) => {
      res.render('projects-show', { project });
    }).catch((err) => {
      console.log(err.message);
    });
  });
};
