const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const app = express();


//mongoose connection
mongoose.connect('mongodb://localhost:27017/the_mash');
const db = mongoose.connection;

//error mongo
db.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const mainRoutes = require('./routes');//Knows it's index
const recipesRoutes = require('./routes/recipes');

app.use(mainRoutes);
app.use('/recipes', recipesRoutes);


// Error

app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status);
	res.render('error');
});

//Localhost

app.listen(3000, () => {
	console.log('The application is running on localhost:3000!')
});