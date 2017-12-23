const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', (req, res) => {
	res.render('index');
});

//Mongo
// let recipe = {
// 	title: req.body.title
// 	rating: req.body.rating;
// 	prep_time: req.body.prep_time;
// 	cook_time: req.body.cook_time;
// 	ingredients: req.body.ingredients;
// 	instructions: req.body.instructions;
// };

// //use schema's 'create' methode to insert document into Mongo
// User.create(userData, function (error, user) {
// 	if (error) {
// 		return next(error);
// 	} else {
// 		return res.redirect('/');
// 	}

// })




module.exports = router;