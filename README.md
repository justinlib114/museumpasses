<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 40px auto;
      padding: 0 20px;
      background-color: #fafafa;
      color: #333;
    }
    h1, h2, h3 {
      color: #00529B;
    }
    code, pre {
      background-color: #eee;
      padding: 4px 6px;
      border-radius: 4px;
      font-family: Consolas, monospace;
    }
    pre {
      overflow-x: auto;
      padding: 10px;
    }
    .highlight {
      background: #dff0d8;
      padding: 8px;
      border-left: 5px solid #3c763d;
    }
    .section {
      margin-bottom: 30px;
    }
  </style>
</head>
<body>

  <h1>🎟️ Library Passes Availability</h1>
  <p>A web app that displays real-time availability of <strong>physical</strong> and <strong>digital</strong> museum passes offered by the <strong>Greenburgh Public Library</strong>. Built with Node.js and Express, and deployed on <a href="https://render.com" target="_blank">Render</a>, this app integrates with Springshare’s <strong>LibCal API</strong> for live data and booking links.</p>

  <div class="section">
    <h2>🔍 Features</h2>
    <ul>
      <li>Real-time availability for physical and digital passes</li>
      <li>Changeable date selector (previous/next/today)</li>
      <li>Clickable booking links for each institution</li>
      <li>Green = available, Red = unavailable</li>
      <li>Secure API token handling via server-side proxy</li>
    </ul>
  </div>

  <div class="section">
    <h2>🖥️ Tech Stack</h2>
    <ul>
      <li><strong>Backend:</strong> Node.js, Express, node-fetch, dotenv, CORS</li>
      <li><strong>Frontend:</strong> Vanilla HTML/CSS/JavaScript</li>
      <li><strong>APIs:</strong> LibCal Equipment & Digital Passes API</li>
      <li><strong>Scheduling:</strong> node-cron (optional future use)</li>
      <li><strong>Deployment:</strong> Render.com</li>
    </ul>
  </div>

  <div class="section">
    <h2>📁 Project Structure</h2>
    <pre><code>/public              # Frontend (index.html, styles, script)
server.js            # Express server and token proxy
.env                 # LibCal credentials (not committed)
package.json         # Node.js project metadata and dependencies</code></pre>
  </div>

  <div class="section">
    <h2>🔐 Environment Variables (.env)</h2>
    <p>Required for token authentication with LibCal:</p>
    <pre><code>CLIENT_ID_DIGITAL=your_digital_client_id
CLIENT_SECRET_DIGITAL=your_digital_client_secret
CLIENT_ID_PHYSICAL=your_physical_client_id
CLIENT_SECRET_PHYSICAL=your_physical_client_secret</code></pre>
  </div>

  <div class="section">
    <h2>📡 API Endpoint</h2>
    <pre><code>GET /token?type=physical | digital</code></pre>
    <p>Returns a short-lived LibCal OAuth access token used by the frontend.</p>
  </div>

  <div class="section">
    <h2>📊 Interface Overview</h2>
    <ul>
      <li>Two-column responsive table layout</li>
      <li>Displays pass name and availability for selected date</li>
      <li>Booking buttons appear when a pass is available</li>
      <li>Color-coded availability:
        <ul>
          <li>🟢 <strong>Available</strong></li>
          <li>🔴 <strong>Not Available</strong></li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="section">
    <h2>🚀 Deployment</h2>
    <p>Deployed on <strong>Render</strong> using Node 16.x runtime specified in <code>package.json</code>.</p>
    <p>To run locally:</p>
    <pre><code>npm install
npm start</code></pre>
    <p>Then open <a href="http://localhost:3000">http://localhost:3000</a> in your browser.</p>
  </div>

  <div class="section">
    <h2>📷 Example UI</h2>
    <p><img src="https://via.placeholder.com/600x300?text=Library+Pass+Availability+UI" alt="UI Preview" style="max-width: 100%;"></p>
  </div>

  <div class="section">
    <h2>🛠️ Planned Enhancements</h2>
    <ul>
      <li>Auto-refreshing daily data via <code>node-cron</code></li>
      <li>Additional filters or search functionality</li>
      <li>Admin interface for managing linked passes</li>
    </ul>
  </div>

  <div class="section">
    <h2>📚 Maintained by</h2>
    <p>Greenburgh Public Library<br>
    <a href="https://greenburghlibrary.org" target="_blank">https://greenburghlibrary.org</a></p>
  </div>

</body>
</html>
