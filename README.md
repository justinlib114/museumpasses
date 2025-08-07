<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<body>

  <h1>🎟️ Library Passes Availability</h1>
  <p>
    A web application to display real-time availability of <strong>physical</strong> and <strong>digital</strong> museum passes 
    offered by the <strong>Greenburgh Public Library</strong>. Deployed on <a href="https://render.com" target="_blank">Render</a> 
    and powered by Springshare's <strong>LibCal API</strong>.
  </p>

  <div class="section">
    <h2>🔍 Features</h2>
    <ul>
      <li>Live availability for both physical and digital passes</li>
      <li>Date navigation (previous, next, or calendar select)</li>
      <li>One-click booking for available passes</li>
      <li>Color-coded status: <span style="color: green;">🟢 Available</span>, <span style="color: red;">🔴 Not Available</span></li>
      <li>Secure OAuth tokens retrieved server-side</li>
    </ul>
  </div>

  <div class="section">
    <h2>🖥️ Tech Stack</h2>
    <ul>
      <li><strong>Backend:</strong> Node.js, Express, node-fetch, dotenv</li>
      <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
      <li><strong>API:</strong> LibCal Equipment and Digital Passes</li>
      <li><strong>Deployment:</strong> <a href="https://render.com" target="_blank">Render</a></li>
    </ul>
  </div>

  <div class="section">
    <h2>📁 Project Structure</h2>
    <pre><code>/public              # Frontend files (index.html, script, styles)
server.js            # Express server and token proxy route
.env                 # LibCal API credentials (excluded from version control)
package.json         # App dependencies and metadata</code></pre>
  </div>

  <div class="section">
    <h2>🔐 Environment Variables</h2>
    <p>Set the following in your <code>.env</code> file (or Render’s environment settings):</p>
    <pre><code>CLIENT_ID_PHYSICAL=your_physical_client_id
CLIENT_SECRET_PHYSICAL=your_physical_client_secret
CLIENT_ID_DIGITAL=your_digital_client_id
CLIENT_SECRET_DIGITAL=your_digital_client_secret</code></pre>
  </div>

  <div class="section">
    <h2>📡 API Endpoint</h2>
    <pre><code>GET /token?type=physical | digital</code></pre>
    <p>Returns a short-lived LibCal OAuth token used by the frontend.</p>
  </div>

  <div class="section">
    <h2>⚙️ Customize Your Data</h2>
    <p>Edit the following constants in <code>public/index.html</code> to match your library's pass configuration:</p>

    <h3>1. 🧾 <code>const itemIds</code> (Physical Pass IDs)</h3>
    <ul>
      <li>Go to <strong>LibCal Admin → Spaces & Equipment</strong></li>
      <li>Select your <strong>location</strong> where museum passes are managed</li>
      <li>Under <strong>Equipment & Categories</strong>, find the <strong>Item ID</strong> (not Category ID)</li>
      <li>Comma-separate these values in the `itemIds` string</li>
    </ul>

    <h3>2. 🔗 <code>const physicalItemLinks</code></h3>
    <ul>
      <li>Map each <strong>physical item name</strong> to its LibCal public URL</li>
      <li>The <strong>key must match the item name exactly</strong> as listed in LibCal</li>
      <li>Friendly URLs (like <code>/passes/hrm</code>) are fine here</li>
    </ul>

    <h3>3. 🌐 <code>const digitalItemLinks</code></h3>
    <ul>
      <li>Visit each digital pass page in LibCal's public view</li>
      <li>Copy the URL <strong>after removing any friendly URL</strong></li>
      <li>Use the value after `/passes/` (e.g., <code>5ecf4efa1af9</code>)</li>
      <li>Example: If URL is <code>https://greenburghlibrary.libcal.com/passes/5ecf4efa1af9</code>, use <code>'5ecf4efa1af9': 'https://greenburghlibrary.libcal.com/passes/wcs'</code></li>
    </ul>

    <h3>4. 🏷️ <code>const digitalItemNames</code></h3>
    <ul>
      <li>Maps the <strong>digitalItemLink ID</strong> to its readable name</li>
      <li>This name must match the pass name set in the LibCal admin interface</li>
    </ul>
  </div>

  <div class="section">
    <h2>🚀 Deploying to Render</h2>
    <p>This project can be deployed for free on <a href="https://render.com" target="_blank">Render</a>.</p>

    <ol>
      <li>Sign up at <a href="https://render.com" target="_blank">render.com</a></li>
      <li>Create a new "Web Service"</li>
      <li>Connect your GitHub repository</li>
      <li>Fill out the deployment settings:
        <ul>
          <li><strong>Environment:</strong> Node</li>
          <li><strong>Build Command:</strong> <code>npm install</code></li>
          <li><strong>Start Command:</strong> <code>npm start</code></li>
          <li><strong>Node Version:</strong> <code>16</code></li>
        </ul>
      </li>
      <li>Add these environment variables:</li>
    </ol>

    <pre><code>CLIENT_ID_PHYSICAL
CLIENT_SECRET_PHYSICAL
CLIENT_ID_DIGITAL
CLIENT_SECRET_DIGITAL</code></pre>

    <p>After deployment, you’ll get a live URL like:</p>
    <pre><code>https://your-app-name.onrender.com</code></pre>

    <p>You can embed this URL in an iframe or share it publicly.</p>
  </div>

  <div class="section">
    <h2>📚 Maintained by</h2>
    <p>
      Greenburgh Public Library<br>
      <a href="https://greenburghlibrary.org" target="_blank">greenburghlibrary.org</a>
    </p>
  </div>

</body>
</html>
