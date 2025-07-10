# 🛍️ ShopIt – MERN Stack E-Commerce Platform

**ShopIt** is a modern, full-stack **e-commerce web application** built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It delivers a robust shopping experience with secure authentication, responsive design, intuitive product management, and a powerful admin dashboard.

🔗 **Live Demo:** [https://shop-it-fashion.vercel.app](https://shop-it-fashion.vercel.app)

---

## ✅ Key Features

- **User Authentication & Authorization**  
  Secure login and signup using JSON Web Tokens (JWT)

- **Product Catalog & Filters**  
  Browse, search, and filter products effortlessly

- **Shopping Cart & Checkout**  
  Add items to cart, view summary, and place orders

- **Admin Dashboard**  
  - 📦 Manage Products: Add, edit, and delete
  - 📃 Track Orders: View and update order status
  - 👥 Manage Users: Assign roles and remove users

- **Responsive UI**  
  Optimized for mobile, tablet, and desktop

---

## 🧑‍💻 Tech Stack

### Frontend
- ⚛️ React.js  
- 🔄 Redux Toolkit  
- 🚦 React Router  
- 📡 Axios  
- 🎨 Tailwind CSS

### Backend
- 🧠 Node.js  
- ⚙️ Express.js  
- 🗂️ MongoDB + Mongoose  
- 🔐 JWT Authentication

### Deployment
- 🌐 Frontend: Vercel  
- 🧾 Backend: Vercel (or can be deployed to Render/Heroku)

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js & npm  
- MongoDB (Atlas or local instance)

---

### 📥 Installation

1. **Clone the repository**

```bash
git clone https://github.com/akshayhatture/ShopIt.git
cd ShopIt
```

2. **Set up environment variables**

Create a `.env` file in the `backend` folder with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

3. **Install dependencies**

**Backend**

```bash
cd backend
npm install
```

**Frontend**

```bash
cd ../frontend
npm install
```

4. **Run the application locally**

**Backend**

```bash
cd backend
npm run dev
```

**Frontend**

```bash
cd ../frontend
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

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

- 💳 Payment Integration (PayPal)  
- 📧 Email Notifications for Orders  
- ⭐ Product Reviews & Ratings  
- 📜 User Order History

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to fork the repo, create a new branch, and submit a pull request.

---

## 📬 Contact

**Akshay Hatture**  
📧 [akshayhatture11@gmail.com](mailto:akshayhatture11@gmail.com)  
🌐 [https://shop-it-fashion.vercel.app](https://shop-it-fashion.vercel.app)
