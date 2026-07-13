import { useEffect, useState } from "react";
import { getContacts } from "../api/contact";
import { generateEmail } from "../api/email";

function EmailGenerator() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState("");
  const [emailType, setEmailType] = useState("Job Referral");
  const [tone, setTone] = useState("Professional");
  const [instructions, setInstructions] = useState("");
  const [generatedEmail, setGeneratedEmail] = useState("");

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

  const handleGenerate = async () => {

  if (!selectedContact) {
    alert("Please select a contact");
    return;
  }

  const contact = contacts.find(
    (c) => c._id === selectedContact
  );

  try {

    const res = await generateEmail({
      contactName: contact.name,
      company: contact.company,
      emailType,
      tone,
      instructions,
    });

    setGeneratedEmail(res.data.email);

  } catch (error) {

    console.log(error);

    alert("Failed to generate email");

  }

};
 

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-2">
        🤖 AI Email Generator
      </h1>

      <p className="text-slate-600 mb-8">
        Generate personalized emails using AI.
      </p>

      <div className="bg-white shadow-lg rounded-xl p-6">

        {/* Contact */}

        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Select Contact
          </label>

          <select
            className="w-full border rounded-lg p-3"
            value={selectedContact}
            onChange={(e) => setSelectedContact(e.target.value)}
          >
            <option value="">Choose Contact</option>

            {contacts.map((contact) => (
              <option
                key={contact._id}
                value={contact._id}
              >
                {contact.name} ({contact.company})
              </option>
            ))}
          </select>
        </div>

        {/* Email Type */}

        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Email Type
          </label>

          <select
            className="w-full border rounded-lg p-3"
            value={emailType}
            onChange={(e) => setEmailType(e.target.value)}
          >
            <option>Job Referral</option>
            <option>Internship</option>
            <option>Cold Email</option>
            <option>Follow Up</option>
            <option>Thank You</option>
          </select>
        </div>

        {/* Tone */}

        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Tone
          </label>

          <select
            className="w-full border rounded-lg p-3"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option>Professional</option>
            <option>Friendly</option>
            <option>Formal</option>
            <option>Confident</option>
          </select>
        </div>

        {/* Instructions */}

        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Additional Instructions
          </label>

          <textarea
            rows="5"
            className="w-full border rounded-lg p-3"
            placeholder="Example: Mention my React project and ask politely for a referral."
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>

        <button
          onClick={handleGenerate}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Generate Email
        </button>

      </div>

      {/* Generated Email */}

      <div className="bg-white shadow-lg rounded-xl p-6 mt-8">

        <h2 className="text-2xl font-bold mb-4">
          Generated Email
        </h2>

        <textarea
          rows="12"
          className="w-full border rounded-lg p-4"
          value={generatedEmail}
          readOnly
          placeholder="Your AI-generated email will appear here..."
        />

      </div>

    </div>
  );
}

export default EmailGenerator;