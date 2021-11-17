const express = require("express");

const router = express.Router();

router.post('/login', async function(req, res) {
    res.json({
        status: "success",
        message: "Logged In"
    })
})

router.post('/register', async function(req, res) {
    res.json({
        status: "success",
        message: "Logged In"
    })
})

module.exports = router;