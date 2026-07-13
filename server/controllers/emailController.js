const { GoogleGenAI } = require("@google/genai");

const generateEmail = async (req, res) => {
  try {
    const {
      contactName,
      company,
      emailType,
      tone,
      instructions,
    } = req.body;

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const prompt = `
You are a professional email writer.

Write a ${tone} ${emailType} email.

Recipient Name: ${contactName}
Company: ${company}

Additional Instructions:
${instructions}

Return only the email content.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    res.status(200).json({
      success: true,
      email: response.text,
    });

  } catch (error) {
    console.error("Gemini Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to generate email",
    });
  }
};

module.exports = {
  generateEmail,
};