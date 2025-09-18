# SQL Injection Demo Site

This project demonstrates a classic SQL injection vulnerability using a Node.js (Express) backend and a React frontend.

## Prerequisites
- Node.js and npm installed
- MySQL database (cloud or local)
- The database must have a table named `users_cyber` with at least one user (e.g., admin)

## Setup Instructions

### 1. Clone the repository
```
git clone [<your-repo-url>](https://github.com/Pathum-Vimukthi-Kumara/Cyber-Attacks-demo-sites)
cd CyberSecurity Projects demos
```


## Warning
**This project is intentionally vulnerable. Do NOT deploy in production. For educational/testing use only.*
   cd "CyberSecurity Projects demos"
   ```

2. **Setup Backend:**
   ```bash
   cd backend
   npm install
   npm start
   ```
   Backend runs on: http://localhost:3001

3. **Setup Frontend (in new terminal):**
   ```bash
   cd frontend
   npm install
   npm start
   ```
   Frontend runs on: http://localhost:3000

## SQL Injection Testing

### How to Test:
1. Open http://localhost:3000
2. Use these SQL injection payloads:

**Username:** `admin' OR 1=1 --`  
**Password:** `anything`

This will bypass authentication and redirect to the admin dashboard.

### Other Payloads to Try:
- `' OR 1=1 --`
- `admin' OR '1'='1' --`
- `' OR 1=1 #`

## Structure
- `backend/` — Node.js Express server (vulnerable endpoint)
- `frontend/` — React app (user interface)

## Warning
**This project is intentionally vulnerable to SQL injection. Use responsibly for educational/testing purposes only. Do NOT deploy in production.**
