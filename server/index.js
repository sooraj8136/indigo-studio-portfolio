import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 4000);
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

const ContactMessage = mongoose.model("ContactMessage", contactSchema);

let mongooseConnectionPromise;

async function connectToDatabase() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not configured.");
  }

  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  if (!mongooseConnectionPromise) {
    mongooseConnectionPromise = mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
  }

  return mongooseConnectionPromise;
}

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", runtime: "express" });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body ?? {};

  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      error: "Name, email, phone, and message are required.",
    });
  }

  try {
    await connectToDatabase();

    const savedMessage = await ContactMessage.create({
      name,
      email,
      phone,
      message,
    });

    return res.status(201).json({
      success: true,
      id: savedMessage._id,
    });
  } catch (error) {
    const message =
      error instanceof Error && error.message.includes("MONGODB_URI")
        ? "MONGODB_URI is not configured."
        : "Unable to save message right now.";

    return res.status(503).json({
      success: false,
      error: message,
    });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.originalUrl} not found.` });
});

app.listen(PORT, () => {
  console.log(`MERN API listening on http://localhost:${PORT}`);
});
