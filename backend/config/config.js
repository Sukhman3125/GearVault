import dotenv from "dotenv";
dotenv.config();

const config = {
  port: Number(process.env.PORT) || 5000,
  nodeEnv: String(process.env.NODE_ENV || "development").trim(),
  clientUrl: String(process.env.CLIENT_URL || "http://localhost:5173").trim(),
  mongoUri: String(process.env.MONGO_URI || "").trim(),
  jwtSecret: String(process.env.JWT_SECRET || "").trim(),
  supabaseUrl: String(process.env.SUPABASE_URL || "").trim(),
  supabaseSecretKey: String(process.env.SUPABASE_SECRET_KEY || "").trim(),
  email: {
    host: String(process.env.EMAIL_HOST || "").trim(),
    port: Number(process.env.EMAIL_PORT) || 587,
    user: String(process.env.EMAIL_USER || "").trim(),
    pass: String(process.env.EMAIL_PASS || "").trim(),
  },
  geminiApiKey: String(process.env.GEMINI_API_KEY || "").trim(),
};

export default config;
