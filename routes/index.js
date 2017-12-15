const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('This will be a home page!');
});

module.exports = router;