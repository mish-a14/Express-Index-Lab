// Load express
const express = require('express');
const path = require('path');
const studentsDb = require('./data/students-db');

// Create our express app
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function(req, res) {
    res.send('<h1>Hello World!</h1>');
});

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/students', function(req, res) {
    res.render('students/index', {
        students: studentsDb.getAll()
    });
});

app.get('/', function(req, res) {
    res.redirect('/home');
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function() {
    console.log('Listening on port 3000');
});