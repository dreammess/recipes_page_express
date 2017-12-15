const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('This will be a recipes page!');
});

//Soups

router.get('/soups', (req, res) => {
	res.send('This is where the soups will go!');
});

router.get('/soups/1', (req, res) => {
	res.send('This will be a carrot soup recipe');
});

//Pasta

router.get('/pasta', (req, res) => {
	res.send('This is where the pastas will go!');
});

router.get('/pasta/1', (req, res) => {
	res.send('This will be a parsley-lemon pasta recipe');
});


module.exports = router;