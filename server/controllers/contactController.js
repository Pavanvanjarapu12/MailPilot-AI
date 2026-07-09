const fs = require("fs");
const csv = require("csv-parser");
const Contact = require("../models/Contact");

// =====================
// Add Contact
// =====================

const addContact = async (req, res) => {
  try {

    const { name, email, company, designation, user } = req.body;

    if (!name || !email || !user) {
      return res.status(400).json({
        success: false,
        message: "Name, Email and User ID are required",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      company,
      designation,
      user,
    });

    res.status(201).json({
      success: true,
      message: "Contact added successfully",
      contact,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

// =====================
// Get All Contacts
// =====================

const getContacts = async (req, res) => {
  try {

    const { user } = req.query;

    const contacts = await Contact.find({ user });

    res.status(200).json({
      success: true,
      contacts,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};


// =====================
// Delete Contact
// =====================

const deleteContact = async (req, res) => {
  try {

    const { id } = req.params;

    await Contact.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

// =====================
// Upload CSV
// =====================

const uploadCSV = async (req, res) => {
  try {

    const results = [];

    const user = req.body.user;

    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on("data", (data) => {

        results.push({
          name: data.name,
          email: data.email,
          company: data.company,
          designation: data.designation,
          user,
        });

      })
      .on("end", async () => {

        await Contact.insertMany(results);

        fs.unlinkSync(req.file.path);

        res.status(201).json({
          success: true,
          message: `${results.length} contacts uploaded successfully`,
        });

      });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "CSV Upload Failed",
    });

  }
};

module.exports = {
  addContact,
  getContacts,
  deleteContact,
  uploadCSV,
};