const express = require("express");
const path = require("path");

const router = express.Router();

router.post("/", (req, res) => {
    res.send(req.body);
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "form.html" ));
});

module.exports = router;