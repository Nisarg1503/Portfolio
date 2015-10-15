var express = require('express');
var router = express.Router();

/* Getting home page. */
router.get('/', function(req, res, next) {
  res.render('index'); 
});

/* Getting about us page */
router.get('/about', function(req, res, next) {
   res.render('about'); 
});

/* Getting Projects page */
router.get('/projects', function(req, res, next) {
   res.render('projects'); 
});

/* Getting Services page */
router.get('/services', function(req, res, next) {
   res.render('services'); 
});

/* Getting contact page */
router.get('/contact', function(req, res, next) {
   res.render('contact'); 
});
module.exports = router;
