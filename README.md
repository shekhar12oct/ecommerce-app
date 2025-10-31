# 🛍️ E-Commerce Web App

A full-stack **MERN** eCommerce platform built using **React**, **Redux Toolkit**, **Node.js**, **Express**, and **MongoDB**.  
It provides user authentication, product listings, cart management, and order flow — all styled with **Tailwind CSS** and deployed using **Render** (backend) and **Vercel** (frontend).

---

## 🚀 Live Demo

🌐 **Frontend:** [https://ecommerce-app.vercel.app](https://ecommerce-app.vercel.app)  
⚙️ **Backend API:** [https://ecommerce-app-w2ql.onrender.com](https://ecommerce-app-w2ql.onrender.com)

---

## 🧩 Tech Stack

### **Frontend**
- ⚛️ React.js  
- 🧠 Redux Toolkit  
- 🎨 Tailwind CSS  
- 🚦 React Router DOM  
- 📡 Axios  

### **Backend**
- 🟩 Node.js  
- ⚙️ Express.js  
- 🍃 MongoDB (via Mongoose)  
- 🔑 JWT Authentication  
- 🔒 bcrypt.js (Password Hashing)  

### **Deployment**
- 🌍 Frontend → [Vercel](https://vercel.com)  
- ☁️ Backend → [Render](https://render.com)  
- 🧾 Database → [MongoDB Atlas](https://www.mongodb.com/atlas)

---

## 🗂️ Folder Structure

ecommerce-app/
│
├── backend/ # Express API
│ ├── server.js
│ ├── routes/
│ ├── models/
│ ├── controllers/
│ └── config/
│
├── frontend/ # React Application
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── redux/
│ │ ├── App.js
│ │ └── main.jsx
│ └── package.json
│
└── README.md

yaml
Copy code

---

## ⚙️ Installation and Setup (Backend + Frontend)

Follow these steps to run the project locally 👇

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/shekhar12oct/ecommerce-app.git
cd ecommerce-app
2️⃣ Backend Setup
Move into the backend folder:

bash
Copy code
cd backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the backend folder and add:

bash
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Run the backend server:

bash
Copy code
npm start
Your backend should now be running at:

arduino
Copy code
http://localhost:5000
Test it by visiting:

bash
Copy code
http://localhost:5000/api/products
3️⃣ Frontend Setup
Open a new terminal window and move into the frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
If your backend is hosted on Render, create a .env file in the frontend folder:

bash
Copy code
VITE_API_URL=https://ecommerce-app-w2ql.onrender.com
Start the frontend:

bash
Copy code
npm run dev
The app will start at:

arduino
Copy code
http://localhost:5173
✨ Features
✅ User Registration & Login (JWT Auth)
✅ Product Listing & Details Page
✅ Add / Remove Products from Cart
✅ Persistent Redux State
✅ Responsive UI with TailwindCSS
✅ Protected Routes for Authenticated Users
✅ Backend CRUD Operations with MongoDB
✅ Deployment with Vercel + Render

🧪 API Endpoints
Method	Endpoint	Description
POST	/api/users/register	Register a new user
POST	/api/users/login	Login a user
GET	/api/products	Fetch all products
GET	/api/products/:id	Get single product by ID

🔒 Environment Variables
Backend (.env)
ini
Copy code
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_secret_key>
Frontend (.env)
ini
Copy code
VITE_API_URL=https://ecommerce-app-w2ql.onrender.com
🧑‍💻 Author
👤 Shekhar Dubey
💼 Front-End Developer | React | Node.js | JavaScript
🌐 LinkedIn
📧 shekhar@example.com

🪪 License
This project is licensed under the MIT License — free for personal and commercial use.

💬 “Built with passion, powered by JavaScript ⚡”
csharp
Copy code
Made with ❤️ by Shekhar Dubey
