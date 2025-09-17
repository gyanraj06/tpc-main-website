export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });

  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ message: "All fields are required." });

  try {
    const response = await fetch("https://api.zeptomail.in/v1.1/email", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Zoho-enczapikey ${process.env.ZEPTO_API_KEY}`,
      },
      body: JSON.stringify({
        from: { address: "noreply@trippechalo.in" },
        to: [{ email_address: { address: "contact.trippechalo.in@gmail.com", name: "TPC Team" } }],
        subject: "New Contact Form Submission",
        htmlbody: `<h3>New Contact Form Submission</h3>
                   <p><b>Name:</b> ${name}</p>
                   <p><b>Email:</b> ${email}</p>
                   <p><b>Message:</b> ${message}</p>`,
      }),
    });

    const text = await response.text();
    let data;
    try { data = JSON.parse(text); } catch { data = { error: text }; }

    res.status(response.ok ? 200 : 500).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
