<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Library Passes Availability - Project Overview</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 2em;
      line-height: 1.6;
      max-width: 900px;
      margin: auto;
      background: #f9f9f9;
    }
    h1, h2, h3 {
      color: #333;
    }
    pre, code {
      background: #eee;
      padding: 0.5em;
      display: block;
      overflow-x: auto;
    }
    a {
      color: #0645AD;
    }
    ul {
      margin-top: 0;
    }
    hr {
      margin: 2em 0;
    }
  </style>
</head>
<body>

  <h1>🎟️ Library Passes Availability App</h1>
  <p>
    This web application displays real-time availability for <strong>physical</strong> and <strong>digital</strong> museum passes offered by the <strong>Greenburgh Public Library</strong>. It is deployed on <a href="https://render.com" target="_blank">Render</a> and powered by Springshare’s <strong>LibCal API</strong>.
  </p>

  <hr>

  <h2>🔍 Features</h2>
  <ul>
    <li>Live availability for physical and digital passes</li>
    <li>Date navigation: previous, next, or calendar selection</li>
    <li>One-click booking for available passes</li>
    <li>Color-coded status: 🟢 Available, 🔴 Not Available</li>
    <li>Secure OAuth tokens retrieved server-side</li>
  </ul>

  <h2>🖥️ Tech Stack</h2>
  <ul>
    <li><strong>Backend:</strong> Node.js, Express, <code>node-fetch</code>, <code>dotenv</code></li>
    <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
    <li><strong>API:</strong> LibCal Equipment API & Digital Passes API</li>
    <li><strong>Deployment:</strong> <a href="https://render.com" target="_blank">Render</a></li>
  </ul>

  <h2>📁 Project Structure</h2>
  <pre><code>/public              # Frontend (index.html, styles, script)
server.js            # Express server with OAuth token route
.env                 # LibCal API credentials (not committed)
package.json         # App metadata and dependencies</code></pre>

  <h2>🔐 Environment Variables</h2>
  <p>Set these in your <code>.env</code> file or in Render’s Environment tab:</p>
  <pre><code>CLIENT_ID_PHYSICAL=your_physical_client_id
CLIENT_SECRET_PHYSICAL=your_physical_client_secret
CLIENT_ID_DIGITAL=your_digital_client_id
CLIENT_SECRET_DIGITAL=your_digital_client_secret</code></pre>

  <h2>📡 API Endpoint</h2>
  <pre><code>GET /token?type=physical | digital</code></pre>
  <p>Returns a short-lived LibCal OAuth token for use by the frontend.</p>

  <hr>

  <h2>⚙️ Customize Your Data</h2>
  <p>Modify the following constants in <code>public/index.html</code>:</p>

  <h3>1️⃣ <code>itemIds</code> (Physical Equipment Item IDs)</h3>
  <pre><code>const itemIds = '177358,148614,148555,...';</code></pre>
  <p><strong>How to find them:</strong> Go to <em>LibCal &gt; Admin &gt; Spaces & Equipment</em>, choose the location, then under <strong>Equipment & Categories</strong> find each <strong>Item ID</strong> (not Category ID).</p>

  <h3>2️⃣ <code>physicalItemLinks</code></h3>
  <pre><code>const physicalItemLinks = {
  "Empire Pass": "https://greenburghlibrary.libcal.com/passes/empirepass",
  "Museum of Modern Art": "https://greenburghlibrary.libcal.com/passes/moma",
  ...
};</code></pre>
  <p>The key must <strong>exactly match the item name</strong> as listed in LibCal. The value is the public-facing booking URL for that item.</p>

  <h3>3️⃣ <code>digitalItemLinks</code></h3>
  <pre><code>const digitalItemLinks = {
  '5ecf4efa1af9': 'https://greenburghlibrary.libcal.com/passes/wcs',
  '68b26db9aa61': 'https://greenburghlibrary.libcal.com/passes/fdr'
};</code></pre>
  <p>
    For each digital pass:
    <ul>
      <li>Remove the <strong>friendly URL</strong> from its category</li>
      <li>Visit the public booking page</li>
      <li>Copy the string after <code>/passes/</code> in the URL — that's your ID</li>
    </ul>
  </p>

  <h3>4️⃣ <code>digitalItemNames</code></h3>
  <pre><code>const digitalItemNames = {
  '5ecf4efa1af9': 'Wildlife Conservation Society Discount Code',
  '68b26db9aa61': 'FDR Presidential Library & Museum'
};</code></pre>
  <p>The key must match the ID from <code>digitalItemLinks</code>. The value must exactly match the category name set in LibCal.</p>

  <hr>

  <h2>🚀 Deploying to Render</h2>
  <p>This app can be deployed for free on <a href="https://render.com" target="_blank">Render</a>.</p>

  <ol>
    <li>Go to <a href="https://render.com" target="_blank">https://render.com</a> and log in</li>
    <li>Click <strong>"New Web Service"</strong></li>
    <li>Connect your GitHub repo</li>
    <li>Set the following:
      <ul>
        <li><strong>Environment:</strong> Node</li>
        <li><strong>Build Command:</strong> <code>npm install</code></li>
        <li><strong>Start Command:</strong> <code>npm start</code></li>
        <li><strong>Node Version:</strong> 16 (already in package.json)</li>
      </ul>
    </li>
    <li>Add the environment variables:
      <pre><code>CLIENT_ID_PHYSICAL
CLIENT_SECRET_PHYSICAL
CLIENT_ID_DIGITAL
CLIENT_SECRET_DIGITAL</code></pre>
    </li>
    <li>Click <strong>"Create Web Service"</strong> to deploy</li>
  </ol>

  <h3>🌐 Example Deployment URL</h3>
  <p><code>https://your-app-name.onrender.com</code></p>
  <p>You can share this publicly or embed it in an iframe.</p>

  <hr>

  <h2>📚 Maintained By</h2>
  <p>
    <strong>Greenburgh Public Library</strong><br>
    <a href="https://greenburghlibrary.org" target="_blank">greenburghlibrary.org</a>
  </p>

</body>
</html>
