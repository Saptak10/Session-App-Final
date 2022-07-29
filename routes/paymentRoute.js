const router = require("express").Router();

const { placeOrder, verifyOrder } = require('../controller/paymentController');

router.post("/orders", placeOrder);

router.post("/verify", verifyOrder);

module.exports = router;