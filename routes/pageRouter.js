const express = require('express');
const {
  index,
  about,
  contact,
  terms,
  privacy,
} = require('../controllers/pageController');

//set router
const router = express.Router();

//Pages
router.route('/').get(index);
router.route('/about').get(about);
router.route('/contact').get(contact);
router.route('/terms').get(terms);
router.route('/privacy').get(privacy);

module.exports = router;
