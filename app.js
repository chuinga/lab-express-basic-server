// IMPORT PACKAGES
const express = require('express');
const morgan = require('morgan');
const projects = require('./data/projects.json');
const articles = require('./data/articles.json');

// CREATE EXPRESS APP
const app = express();


// MIDDLEWARE
// Here you should set up the required middleware:
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'))


// ROUTES
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/home.html');
});
app.get('/blog', (request, response) => {
    response.sendFile(__dirname + '/views/blog.html');
});
app.get('/api/projects', (request, response) => {
    response.json(projects);
});
app.get('/api/articles', (request, response) => {
    response.json(articles);
});
app.use((request, response) => {
    response.status(404).sendFile(__dirname + '/views/not-found.html');
});


// START THE SERVER
app.listen(5005, () => console.log('My first app listening on port 5005!'))
