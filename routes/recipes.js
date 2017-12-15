const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.locals.title = 'This will be a recipes page!';
	res.render('recipes');
});

//Soups

router.get('/soups', (req, res) => {
	res.locals.title = 'This is where the soups will go!';
	res.locals.recipeName = 'Carrot Soup';
	res.locals.category = 'Soups';
	res.render('recipe_menu');
});

router.get('/soups/1', (req, res) => {
	res.locals.title = 'This will be a carrot soup recipe';
	res.locals.category = 'Soups';
	res.render('recipe');
});

//Pasta
 
router.get('/pastas', (req, res) => {
	res.locals.title = 'This is where the pastas will go!';
	res.locals.recipeName = 'Parsley-Lemon Pasta';
	res.locals.category = 'Pastas';
	res.render('recipe_menu');
});

router.get('/pastas/1', (req, res) => {
	res.locals.title = 'This will be a parsley-lemon pasta recipe';
	res.locals.category = 'Pastas';
	res.render('recipe');
});


module.exports = router;