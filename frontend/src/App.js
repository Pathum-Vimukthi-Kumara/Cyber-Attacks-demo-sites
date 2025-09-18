import React, { useState } from 'react';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(null);
    try {
      const res = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      setResult(data);
      if (data.success && data.user) {
        setLoggedInUser(data.user);
      }
    } catch (err) {
      setResult({ success: false, message: 'Network error' });
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setUsername('');
    setPassword('');
    setResult(null);
  };

  if (loggedInUser) {
    return (
      <>
        <Dashboard user={loggedInUser} />
        <div className="container mt-3">
          <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
        </div>
      </>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">SQL Injection Demo Login</h2>
      <div className="alert alert-warning">
        <strong>Warning:</strong> This site is intentionally vulnerable to SQL injection. For educational/testing use only.
      </div>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      {result && (
        <div className={result.success ? 'alert alert-success' : 'alert alert-danger'}>
          {result.message}
          {result.user && (
            <div className="mt-2">
              <strong>User:</strong> {result.user.username}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
