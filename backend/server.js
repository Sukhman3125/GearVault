import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import config from "./config/config.js";
import connectDB from "./config/db.js";
import moduleRoutes from "./modules/index.js";

const app = express();

// Security
app.use(helmet());

// Request logging
app.use(morgan("dev"));

// CORS
app.use(
  cors({
    origin: config.clientUrl,
    credentials: true,
  }),
);

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parsing
app.use(cookieParser());

// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "GearVault API is running",
  });
});

// Routes
app.use("/api", moduleRoutes);

// Server
const PORT = config.port;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});