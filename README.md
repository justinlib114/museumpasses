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
      <li>Date navigation (previous, next, or select)</li>
      <li>Booking links directly integrated into results</li>
      <li>Secure server-side OAuth token retrieval</li>
      <li>Color-coded status: 🟢 Available, 🔴 Not Available</li>
    </ul>
  </div>

  <div class="section">
    <h2>🖥️ Tech Stack</h2>
    <ul>
      <li><strong>Backend:</strong> Node.js, Express, node-fetch, dotenv, CORS</li>
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
    <p>These must be set in <code>.env</code> (or in Render's environment settings):</p>
    <pre><code>CLIENT_ID_DIGITAL=your_digital_client_id
CLIENT_SECRET_DIGITAL=your_digital_client_secret
CLIENT_ID_PHYSICAL=your_physical_client_id
CLIENT_SECRET_PHYSICAL=your_physical_client_secret</code></pre>
  </div>

  <div class="section">
    <h2>📡 API Endpoint</h2>
    <pre><code>GET /token?type=physical | digital</code></pre>
    <p>Returns a short-lived LibCal OAuth token for frontend API calls.</p>
  </div>

  <div class="section">
    <h2>📊 Interface Overview</h2>
    <ul>
      <li>Responsive 2-column layout</li>
      <li>Passes grouped alphabetically across two tables</li>
      <li>Displays institution name and availability</li>
      <li>Booking button shown when available</li>
    </ul>
  </div>

  <div class="section">
    <h2>🚀 Local Development</h2>
    <pre><code>npm install
npm start</code></pre>
    <p>Visit <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> in your browser.</p>
  </div>

  <div class="section">
    <h2>📷 UI Preview</h2>
    <p><img src="https://via.placeholder.com/700x300?text=Pass+Availability+UI" alt="UI Preview" style="max-width: 100%; border: 1px solid #ccc;"></p>
  </div>

  <div class="section">
    <h2>🛠️ Future Improvements</h2>
    <ul>
      <li>Scheduled daily refresh with <code>node-cron</code></li>
      <li>Advanced filtering and sorting options</li>
      <li>Admin management interface for pass updates</li>
    </ul>
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
