const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")
const cartRoutes = require("./routes/cartRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes")
const uploadRoutes = require("./routes/uploadRoutes");
const subscribeRoute = require("./routes/subscribeRoute");
const adminRoutes = require("./routes/adminRoutes");
const productAdminRoutes = require("./routes/productAdminRoutes");
const adminOrderRoutes = require("./routes/adminOrderRoutes");

const app = express();
app.use(express.json());
const allowedOrigins = [
  "https://shop-it-fashion.vercel.app/", // your Vercel frontend URL
  "http://localhost:5173",            // dev URL (optional)
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, // if you're sending cookies or auth headers
}));

dotenv.config();

const PORT = process.env.PORT || 3000;

//connect to MongoDB
connectDB();

app.get("/", (req, res) => {
    res.send("Welcome to ShopIt")
})

//API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api", subscribeRoute);

//Admin
app.use("/api/admin/users", adminRoutes);
app.use("/api/admin/products", productAdminRoutes);
app.use("/api/admin/orders", adminOrderRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
