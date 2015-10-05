var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:name?', function(req, res, next) {
    if (req.params.name) {
        res.send(
            'Hello! '
            + req.params.name + "<br>"
            + ((req.params.name == "ふらたん") ? "♡" : "")
            + ((req.params.name == "はるふ") ? "はるふだよー" : "")
        );
    } else {
        res.send("Hello! What's your name?");
    }
});

module.exports = router;
