import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import session from "express-session";
import passport from "passport";
import "./passport.js";
import jwt from "jsonwebtoken";

import profileRoutes from "./routes/profile.js";
import uploadRoutes from "./routes/upload.js";
import userRoutes from "./routes/user.js";
import jobRoutes from './routes/jobRoutes.js';



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/user", userRoutes);
app.use('/api/jobs', jobRoutes);

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Google Auth Routes
app.get("/api/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get(
  "/api/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: true,
  }),
  (req, res) => {
    // After success, redirect back to frontend
     res.redirect("http://localhost:5173/login");
  }
);



const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);

});
