import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS setup - configurable via environment variable
// Set ALLOWED_ORIGINS as comma separated values in your deployment settings
// e.g. ALLOWED_ORIGINS=https://job-finder-8gx8uz60z-prerna-rajputs-projects.vercel.app
const allowedOrigins = (
  process.env.ALLOWED_ORIGINS || "http://localhost:5173"
).split(",");

app.use(
  cors({
    origin(origin, callback) {
      // allow requests with no origin like from curl or mobile apps
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      // you can log blocked origins for debugging
      console.warn("Blocked CORS request from origin:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    optionsSuccessStatus: 200,
  })
);

// preflight handler
app.options("*", cors());

// Routes ---------

// just to check >>>>>>>

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "I am coming from backend",
    success: true,
  });
});

// Mount user routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// server connect
const port = process.env.PORT || 3000;

app.listen(port, () => {
  connectDB(); //DB connect !
  console.log(`Server running on port ${port} 🔥`);
});
