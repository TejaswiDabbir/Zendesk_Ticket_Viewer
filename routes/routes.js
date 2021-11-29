const express = require('express');
const router = express.Router();
const API = require("../controllers/api");

router.get("/", API.fetchAllTickets);
router.get("/:pageNumber", API.fetchTicketsByPage);

module.exports = router;