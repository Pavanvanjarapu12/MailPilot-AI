import { useEffect, useState } from "react";
import {
  getContacts,
  addContact,
  deleteContact,
  uploadCSV,
} from "../api/contact";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    designation: "",
  });

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await getContacts(user.id);
      setContacts(res.data.contacts);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addContact({
        ...formData,
        user: user.id,
      });

      alert("Contact Added Successfully");

      setFormData({
        name: "",
        email: "",
        company: "",
        designation: "",
      });

      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmDelete) return;

    try {
      await deleteContact(id);

      alert("Contact Deleted Successfully");

      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  };


  const handleCSVUpload = async (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const formData = new FormData();

  formData.append("file", file);
  formData.append("user", user.id);

  try {
    const res = await uploadCSV(formData);

    alert(res.data.message);

    fetchContacts();

  } catch (error) {
    console.log(error);
    alert("CSV Upload Failed");
  }
};

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        Contacts
      </h1>

      {/* Add Contact Form */}
      <div className="mb-6">

  <label className="bg-green-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-green-700">

    Upload CSV

    <input
      type="file"
      accept=".csv"
      onChange={handleCSVUpload}
      className="hidden"
    />

  </label>

</div>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-xl p-6 mb-8"
      >

        <div className="grid grid-cols-2 gap-4">

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="designation"
            placeholder="Designation"
            value={formData.designation}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

        </div>

        <button
          type="submit"
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Add Contact
        </button>

      </form>

      {/* Contacts Table */}

      <table className="w-full bg-white shadow rounded-xl">

        <thead className="bg-slate-100">

          <tr>
            <th className="p-4">Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {contacts.map((contact) => (

            <tr
              key={contact._id}
              className="border-t text-center"
            >

              <td className="p-4">{contact.name}</td>

              <td>{contact.email}</td>

              <td>{contact.company}</td>

              <td>{contact.designation}</td>

              <td>
                <button
                  onClick={() => handleDelete(contact._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Contacts;