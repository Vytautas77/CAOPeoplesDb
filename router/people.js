const express = require("express");
const router = express.Router();
const {
  ADD_PEOPLE,
  GET_ALL_PEOPLES,
  GET_ALL_PEOPLE_BY_ID,
  UPDATE_PEOPLE,
} = require("../controller/people");

router.post("/peoples", ADD_PEOPLE);
router.get("/peoples", GET_ALL_PEOPLES);
router.get("/peoples/:id", GET_ALL_PEOPLE_BY_ID);
router.put("/peoples/:id", UPDATE_PEOPLE);

module.exports = router;
