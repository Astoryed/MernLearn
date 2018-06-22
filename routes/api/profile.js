const express = require('express');
const router = express.Router();


//routes        GET api/profiles/test
//Description   Test profile route
//@access       Public
router.get('/test', (req, res) => res.json({msg: "Profile Works"}));

module.exports = router;
