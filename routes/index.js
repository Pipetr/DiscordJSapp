var express = require('express');
var router = express.Router();
const { sendToDisc } = require("../routes/bot"); // adjust path if needed

/* GET home page. */
router.get('/', function(req, res, next) {
    const success = req.query.success;
    const error = req.query.error;
  res.render('index', { title: 'Express', success, error  });
});

// New route for handling Discord messages
router.post('/sendToDisc', async (req, res, next) => {
  console.log("[ROUTE] Received POST /sendToDisc");
  const { name, email, text } = req.body;
  console.log("[BODY]", req.body);

  const message = `New Review: \nName: ${name} \nEmail: ${email} \nMessage: ${ text }`
  try {
    await sendToDisc(message);
    res.send("Message sent to discord")
  } catch (error) {
    res.render('error', { error: error.message });
  }
});

module.exports = router;
