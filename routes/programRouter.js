const express = require('express');
const { programs, program } = require('../controllers/programController');

//set router
const router = express.Router();

router.route('/').get(programs);
router.route('/:id').get(program);

module.exports = router;
