const express = require('express');
const router = express.Router();

//Routers:
router.get('', (req, res) => {
    const locals = {
        title: "NodeJs Blog",
        description: "Created by foreigner."
    }
    res.render('index', {locals});
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
