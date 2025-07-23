var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// New route for handling Discord messages
router.post('/sendToDisc', async function(req, res, next) {
  try {
    const { message } = req.body;
    await req.sendToDisc(message);
    res.render('success', { 
      title: 'Success!',
      message: 'Your message was sent to Discord' 
    });
  } catch (error) {
    next(error); // Pass to error handler
  }
});

module.exports = router;
