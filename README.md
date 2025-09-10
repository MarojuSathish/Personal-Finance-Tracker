**Personal Finance Tracker**
A full-stack MERN application to track personal finances, view transaction history, and analyze spending with charts and filters.

**Features**
Add, edit, delete transactions
View all transactions with category, amount, and date
Filter transactions by Income / Expense / All
Pie chart visualizing spending per category
Balance summary (Income, Expense, Total Balance)
Responsive and clean UI
Transaction Fields:
title – Name of the transaction
amount – Positive (income) / Negative (expense)
date – Transaction date
category – Category of the transaction

**Tech Stack**

Frontend: React, React Router, Axios, Recharts, CSS
Backend: Node.js, Express.js, MongoDB (Mongoose)
Dev Tools: Nodemon, VS Code

**Backend Setup**
cd backend
npm install
npx nodemon server.js

**Frontend Setup**
cd frontend
npm install
npm start


Base URL: http://localhost:5000/api/transactions
Method	Endpoint	Description	Body / Params
GET	/	Get all transactions	None
GET	/:id	Get transaction by ID	URL param: id
POST	/	Create a new transaction	JSON body: { title, amount, date, category }
PUT	/:id	Update a transaction by ID	URL param: id, JSON body: {...}
DELETE	/:id	Delete a transaction by ID	URL param: id
