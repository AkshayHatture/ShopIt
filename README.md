# 🛍️ ShopIt – Full-Stack E-Commerce Application

**ShopIt** is a full-featured 🧑‍💻 e-commerce web application built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js). It offers a seamless shopping 🛒 experience with product browsing, cart management, secure checkout, user auth, and a powerful admin dashboard.

🔗 **Live Demo**: [🌐 https://shop-it-fashion.vercel.app](https://shop-it-fashion.vercel.app)

---

## ✨ Features

✅ **User Authentication & Authorization** – Secure login/signup using JWT  
🛍️ **Product Management** – Browse, search 🔍, and filter products  
🛒 **Shopping Cart** – Add/remove/manage items  
💳 **Checkout** – View order summary and place orders  
🧑‍💼 **Admin Dashboard**  
  📦 Add/Edit/Delete products  
  📃 View & update orders  
  🧑 Manage users and roles  
📱 **Responsive Design** – Works on all devices

---

## 🧰 Tech Stack

### ⚙️ Frontend
- ⚛️ React.js  
- 🔄 Redux  
- 🚦 React Router  
- 📡 Axios  

### 🖥️ Backend
- 🧠 Node.js  
- ⚙️ Express.js  
- 🗂️ MongoDB + Mongoose  
- 🔐 JWT Authentication  

### ☁️ Deployment
- 🌐 Frontend: Vercel  
- 🧾 Backend: Vercel

---

## 🚀 Getting Started

### 🔧 Prerequisites
- 🟢 Node.js and npm
- 🟠 MongoDB (local or Atlas)

### 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/akshayhatture/ShopIt.git
   cd ShopIt
   ```

2. **Setup environment variables**

   Create a `.env` file inside the `backend` folder:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

3. **Install dependencies**

   - Backend:
     ```bash
     cd backend
     npm install
     ```

   - Frontend:
     ```bash
     cd ../frontend
     npm install
     ```

4. **Run the application**

   - Backend:
     ```bash
     cd backend
     npm run dev
     ```

   - Frontend:
     ```bash
     cd frontend
     npm start
     ```

🔗 Visit: `http://localhost:3000`

---

## 📁 Project Structure

```
ShopIt/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── redux/
│       └── App.js
├── .gitignore
├── README.md
└── package.json
```

---

## 🚧 Future Enhancements

🚀 Integrate Stripe or PayPal for payments  
📧 Send email confirmations and notifications  
⭐ Add product reviews and ratings  
📜 Enable order history for users  

---

## 🤝 Contributing

👐 Contributions are welcome!  
Fork the repo 🍴 and submit a PR 🛠️ with improvements or fixes.

---

## 📬 Contact

For any queries or feedback:  
📧 **Akshay Hatture** – [akshayhatture11@gmail.com](mailto:akshayhatture11@gmail.com)
