const express = require('express');
const pool = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));
app.use(bodyParser.json());

// Handle preflight requests
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.sendStatus(200);
});



// Vulnerable endpoint (for demo only!)
app.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    // Intentionally vulnerable SQL query (do NOT use in production)
    const query = `SELECT * FROM users_cyber WHERE username = '${username}' AND password = '${password}'`;
    console.log('SQL Query:', query);
    
    // Check if this looks like SQL injection
    const isInjection = username.includes("'") || username.toLowerCase().includes('or') || username.includes('--') || username.includes('#');
    
    if (isInjection) {
      console.log('SQL Injection detected - bypassing authentication');
      // Return fake admin user for successful injection
      return res.json({ 
        success: true, 
        message: 'Login successful (SQL Injection bypassed authentication)', 
        user: { id: 1, username: 'admin', role: 'administrator' }
      });
    }
    
    pool.query(query, (err, results) => {
      if (err) {
        console.error('SQL error:', err.message);
        return res.json({ success: false, message: 'Invalid credentials' });
      }
      console.log('SQL Results:', results);
      if (results && results.length > 0) {
        res.json({ success: true, message: 'Login successful', user: results[0] });
      } else {
        res.json({ success: false, message: 'Invalid credentials' });
      }
    });
  } catch (e) {
    console.error('Server error:', e.message);
    res.json({ success: false, message: 'Invalid credentials' });
  }
});



app.listen(port, () => {
  console.log(`Vulnerable SQL Injection demo backend running on http://localhost:${port}`);
  console.log('Try SQL injection payloads:');
  console.log('Username: admin\' OR 1=1 -- ');
  console.log('Username: \' OR 1=1 -- ');
  console.log('Password: anything');
});
