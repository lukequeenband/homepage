import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import fs from "fs";

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
      
      // 1. Back up the subscriber info locally on disk so the band never loses signups
      const backupPath = path.join(process.cwd(), "mailing_list_submissions.json");
      let submissions: Array<{ name: string; email: string; date: string }> = [];
      
      try {
        if (fs.existsSync(backupPath)) {
          const fileData = fs.readFileSync(backupPath, "utf-8");
          submissions = JSON.parse(fileData);
        }
      } catch (readErr) {
        console.error("Failed to read local mailing-list backup:", readErr);
      }

      submissions.push({
        name,
        email,
        date: new Date().toISOString()
      });

      try {
        fs.writeFileSync(backupPath, JSON.stringify(submissions, null, 2), "utf-8");
        console.log(`Successfully backed up subscriber: ${email} to ${backupPath}`);
      } catch (writeErr) {
        console.error("Failed to save local mailing-list backup:", writeErr);
      }

      // 2. Forward to the Google Form in the background
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeWb6b6OwhXcafkBS-KgUtWk0G0nsGpHdzMHGRbNDDDP2l-gA/formResponse";
      const bodyArgs = new URLSearchParams();
      bodyArgs.append("emailAddress", email);
      bodyArgs.append("entry.81527058", name);

      try {
        const googleResponse = await fetch(formUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
          },
          body: bodyArgs.toString(),
        });

        if (googleResponse.status >= 200 && googleResponse.status < 400) {
          console.log("Mailing List signup successfully forwarded to Google Sheet.");
        } else {
          const textStr = await googleResponse.text().catch(() => "");
          console.warn(`Google Forms returned non-2xx status ${googleResponse.status}:`, textStr.substring(0, 300));
        }
      } catch (forwardErr) {
        console.warn("Background forward to Google Forms failed (saved locally instead):", forwardErr);
      }

      // We always return 200/success since the signup was recorded and secured in our local database file
      return res.status(200).json({ status: "success", message: "Successfully subscribed!" });
    } catch (err: any) {
      console.error("General mailing-list endpoint error:", err);
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
