const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.locals.title = 'This will be a recipes page!';
	res.render('recipes');
});

//Soups

router.get('/soups', (req, res) => {
	res.locals.title = 'This is where the soups will go!';
	res.render('recipe_menu');
});

router.get('/soups/1', (req, res) => {
	res.locals.title = 'This will be a carrot soup recipe';
	res.render('recipe');
});

//Pasta
 
router.get('/pasta', (req, res) => {
	res.locals.title = 'This is where the pastas will go!';
	res.render('recipe_menu');
});

router.get('/pasta/1', (req, res) => {
	res.locals.title = 'This will be a parsley-lemon pasta recipe';
	res.render('recipe');
});


module.exports = router;