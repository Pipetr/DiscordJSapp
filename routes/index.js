var express = require('express');
var router = express.Router();
const hello = require('../public/javascripts/index.js'); // Import the hrllo function


/* GET home page. */
router.get('/', function(req, res, next) {
    const success = req.query.success;
    const error = req.query.error;
  res.render('index', { title: 'Express', success, error  });
});

router.post('/', async (req, res) => {
    const { name, email, review } = req.body;

    const message = `Name: ${name}\nEmail: ${email}\nReview: ${review}`;

    try {
      hello(message); // Call the hrllo function from index.js  
      res.render('validate', { success: true , title: message });
    } catch (error) {
        console.error('Error sending to Discord:', error);
        res.render('validate', { error: true });
    }
});


module.exports = router;