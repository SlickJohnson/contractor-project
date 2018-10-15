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

  // EDIT
  app.get('/projects/:id/edit', (req, res) => {
    Project.findById(req.params.id, (err, project) => {
      res.render('projects-edit', { project });
    });
  });

  // UPDATE
  app.put('/projects/:id', (req, res) => {
    Project.findByIdAndUpdate(req.params.id, req.body)
      .then((project) => {
        res.redirect(`/projects/${project._id}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  // DELETE
  app.delete('/projects/:id', (req, res) => {
    Project.findByIdAndRemove(req.params.id).then(() => {
      res.redirect('/');
    }).catch((err) => {
      console.log(err.message);
    });
  });
};
