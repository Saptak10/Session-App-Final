const express = require('express');
const router = express.Router();

const { addSession, getSession, getSessionById } = require('../controller/sessionController');

router.route("/")
    .post(addSession)
    .get(getSession)

router.route("/:id")
    .get(getSessionById)

module.exports = router;
