const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

const mainRoutes = require('./routes');//Knows it's index
const recipesRoutes = require('./routes/recipes');

app.use(mainRoutes);
app.use('/recipes', recipesRoutes);

// Recipes

//Pierogi

app.get('/recipes/pierogi', (req, res) => {
	res.render('recipes', { title: pierogi.title,
						  header: pierogi.header,
						  ingredients: pierogi.ingredients,
						  instructions: pierogi.instructions});
});


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