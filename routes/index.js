var express = require('express');
var router = express.Router();


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
      console.log('Sending to Discord:\n',message);
        res.render('index', { success: true });
    } catch (error) {
        console.error('Error sending to Discord:', error);
        res.render('index', { error: true });
    }
});


module.exports = router;