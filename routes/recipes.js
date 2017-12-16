const express = require('express');
const { recipes } = require('../data/recipesData.json');
const router = express.Router();

router.get('/', (req, res) => {
	res.locals.title = 'This will be a recipes page!';
	res.render('recipes');
});

// Category Splash Page: Contains a list of recipes
// belonging to the given category.

router.get('/:category/', (req, res) => {
	const category = req.params.category;
	const items = recipes[category];
	res.render('recipe_menu', {items, category});
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