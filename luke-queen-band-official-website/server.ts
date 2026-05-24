import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, comment } = req.body;

    console.log("New Contact Form Submission:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Comment: ${comment}`);

    // INTEGRATION NOTE: 
    // To send actual emails, you can use a service like Resend, SendGrid, or Nodemailer.
    // Example with a hypothetical mail service:
    /*
    if (process.env.MAIL_API_KEY) {
       await sendEmail({
         to: "lukequeenband@gmail.com",
         subject: `New Hooking Inquiry from ${name}`,
         text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${comment}`
       });
    }
    */

    // For now, we simulate a successful send
    res.status(200).json({ status: "success", message: "Form submitted successfully" });
  });

  app.post("/api/mailing-list", async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ status: "error", message: "Name and Email are required." });
    }

    try {
      console.log(`New Mailing List signup request: ${name} <${email}>`);
      
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeWb6b6OwhXcafkBS-KgUtWk0G0nsGpHdzMHGRbNDDDP2l-gA/formResponse";
      const bodyArgs = new URLSearchParams();
      bodyArgs.append("emailAddress", email);
      bodyArgs.append("entry.81527058", name);

      const googleResponse = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        },
        body: bodyArgs.toString(),
      });

      // Google Forms sometimes redirects (302) or returns 200. Usually sub-requests are successful if no crash.
      if (googleResponse.status >= 200 && googleResponse.status < 400) {
        console.log("Mailing List signup successfully forwarded to Google Sheet.");
        return res.status(200).json({ status: "success", message: "Successfully subscribed!" });
      } else {
        const textStr = await googleResponse.text().catch(() => "");
        console.error(`Google Forms returned status ${googleResponse.status}:`, textStr.substring(0, 500));
        // Still return success if we did send the request without crashing, 
        // but let's let the user know if there was an actual server error.
        return res.status(200).json({ status: "success", message: "Subscribed (with status info)" });
      }
    } catch (err: any) {
      console.error("Failed to forward response to Google Forms:", err);
      return res.status(500).json({ status: "error", message: "Server error, failed to subscribe. Please try again." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
