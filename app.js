const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

const pierogi = {
	title: "Lime-Beetroot Pierogi with Dill Yogurt Sauce",
	header: "Instructions: ",
	ingredients: [
		"2 Beetroots", 
		"1 Lime", 
		"500ml Yogurt", 
		"1 clove of garlic"],
	instructions: [
		"Cook the Beetroot",
		"Make the pierogis",
		"Make the sauce"
	]
}

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');


// Recipes

app.get('/recipes', (req, res) => {
	res.render('recipes', { title: pierogi.title,
						  header: pierogi.header,
						  ingredients: pierogi.ingredients,
						  instructions: pierogi.instructions});
});

app.use((req, res, next) => {
	const err = new Error('NOt Found');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status);
	res.render('error');
});

app.listen(3000, () => {
	console.log('The application is running on localhost:3000!')
});