# SQL Injection Demo Site

This project demonstrates a classic SQL injection vulnerability using a Node.js (Express) backend and a React frontend.

## Prerequisites
- Node.js and npm installed
- MySQL database (cloud or local)
- The database must have a table named `users_cyber` with at least one user (e.g., admin)

## Setup Instructions

### 1. Clone the repository
```
git clone <your-repo-url>
cd CyberSecurity Projects demos
```

### 2. Configure the backend
- Go to the `backend` folder:
   ```
   cd backend
   ```
- Create a `.env` file with your MySQL credentials:
   ```
   DB_HOST=your-mysql-host
   DB_USER=your-mysql-username
   DB_PASSWORD=your-mysql-password
   DB_NAME=your-mysql-dbname
   DB_PORT=3306
   PORT=3001
   ```
- Install dependencies:
   ```
   npm install
   ```

### 3. Configure the frontend
- Go to the `frontend` folder:
   ```
   cd ../frontend
   ```
- Install dependencies:
   ```
   npm install
   ```

### 4. Start the backend
- In the `backend` folder:
   ```
   npm start
   ```

### 5. Start the frontend
- In the `frontend` folder (new terminal):
   ```
   npm start
   ```

### 6. Open the app
- Visit [http://localhost:3000](http://localhost:3000) in your browser.

## SQL Injection Demo
- Try logging in with a payload like:
   - Username: `' OR 1=1 --`
   - Password: (leave blank or any value)
- You should be logged in as the first user in the database, demonstrating the vulnerability.

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
