const express = require("express");
const fetch = require("node-fetch");
const path = require("path");
const cors = require("cors"); // Import the cors package
const cron = require("node-cron"); // Import the node-cron package
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors()); // Add this line to enable CORS for all requests

// Serve static files (index.html, CSS, JS)
app.use(express.static("public"));

// Endpoint to get access tokens securely
app.get("/token", async (req, res) => {
  const { type } = req.query; // 'physical' or 'digital'
  let clientId, clientSecret;

  if (type === "physical") {
    clientId = process.env.CLIENT_ID_PHYSICAL;
    clientSecret = process.env.CLIENT_SECRET_PHYSICAL;
  } else if (type === "digital") {
    clientId = process.env.CLIENT_ID_DIGITAL;
    clientSecret = process.env.CLIENT_SECRET_DIGITAL;
  } else {
    return res.status(400).send("Invalid type");
  }

  const tokenUrl = "https://greenburghlibrary.libcal.com/1.1/oauth/token";
  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "client_credentials",
  });

  try {
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to fetch token: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    const data = await response.json();
    res.json({ token: data.access_token });
  } catch (error) {
    console.error("Error fetching access token:", error);
    res.status(500).send("Failed to obtain token");
  }
});

// Museum Pass Widget Route
app.get("/widget", async (req, res) => {
  try {
    // Currently returns your full index.html (you may override this later)
    res.sendFile(path.join(__dirname, "public/index.html"));
  } catch (error) {
    console.error("Error generating widget:", error);
    res.status(500).send("<p>Failed to load widget.</p>");
  }
});

// Lightweight endpoint for external cron job pings
app.get("/ping", (req, res) => {
  res.send("OK");
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
