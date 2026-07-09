const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  addContact,
  getContacts,
  deleteContact,
  uploadCSV,
} = require("../controllers/contactController");

// Contact APIs
router.post("/", addContact);

router.get("/", getContacts);

router.delete("/:id", deleteContact);

// CSV Upload API
router.post("/upload", upload.single("file"), uploadCSV);

module.exports = router;