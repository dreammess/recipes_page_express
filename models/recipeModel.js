const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
	category: {
		type: String,
		required: true,
		trim: true
	},
	title: {
		type: String,
		required: true,
		trim: true,
		unique: true
	},
	image: {
		type: String
	},
	prep_time: {
		type: String,
	},
	cook_time: {
		type: String
	},
	rating: {
		type: String,
		required: true,
		trim: true
	},
	ingredients: {
		type: [String],
		required: true
	},
	instructions: {
		type: [String],
		required: true
	},
	description: {
		type: String,
		trim: true
	},
});


var Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;


// const RecipeSchema = new mongoose.Schema({
//   category: {
// 	   type: String,
//     required: true,
//     trim: true,
//     unique: true,
//   },
//   title: {
//     type: String,
//     required: true,
//     trim: true,
//     unique: true,
//   },
//    image: {
//     type: String,
//     required: false,
//     unique: true,
//   },
//   rating: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   prep_time: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   cook_time: {
//     type: String,
//     required: true
//   },
//   ingredients: {
//   	type: [String],
//   	required: true
//   },
//   ingredients: {
//   	type: [String],
//   	required: true
//   },
//   description: {
//     type: String,
//     required: true
//   },

// });

// var Recipe = mongoose.model('Recipe', RecipeSchema);
// module.exports = Recipe;