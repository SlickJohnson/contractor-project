const express = require('express');

const app = express();

const mongoose = require('mongoose');

const exphbs = require('express-handlebars');

const bodyParser = require('body-parser');

const methodOverride = require('method-override');

const projects = require('./controllers/projects');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/save-the-world', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

projects(app);

module.exports = app.listen(process.env.PORT || 3000, () => {
  console.log('App listening on port 3000!');
});