const express = require('express');
const fs = require('fs');
const { recipes } = require('../data/recipesData.json');
const data = require('../data/recipesData.json');
const router = express.Router();

router.get('/', (req, res) => {
	res.locals.title = 'This will be a recipes page!';
	res.render('recipes');
});

// Add recipe.

router.get('/add', (req, res) => {
	res.render('add');	
});

// Temp post method for adding data. Just using a flat file for now.

router.post('/add', (req, res) => {
	let recipe = {};
	recipe.title = req.body.title;

	// Split the ingredients on either a new line or a comma,
	// trim white space and add to array
	recipe.ingredients = req.body.ingredients.split(/[\n,]/);
	recipe.ingredients = recipe.ingredients.map(x => x.trim());
	// Split the instructions on either a new line or a comma,
	// trim white space and add to array
	recipe.instructions = req.body.instructions.split(/[\n,]/);
	recipe.instructions = recipe.instructions.map(x => x.trim());
	
	data.recipes[req.body.category].push(recipe);
	fs.writeFile("data/soups.txt", JSON.stringify(data, null, 2), 'utf-8', function (err) {
    	if (err) 
        	return console.log(err);
    	console.log('Wrote Hello World in file helloworld.txt, just check it');
	});
	res.render('add');
})

// Category Splash Page: Contains a list of recipes
// belonging to the given category.

router.get('/:category/', (req, res) => {
	const category = req.params.category;
	const items = recipes[category];
	res.render('recipe_menu', {items, category})
});

// Recipe: individual recipe page.

router.get('/:category/:id', (req, res) => {
	const id = req.params.id;
	const category = req.params.category;
	const {title} = recipes[category][id];
	const { ingredients } = recipes[category][id];
	const { instructions } = recipes[category][id];
	console.log(recipes[category][id].title);

	// Values passed to the template
	const templateData = { title, category, ingredients, instructions };

	res.render('recipe', templateData);
});



module.exports = router;