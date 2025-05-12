import express from "express";
import dotenv from "dotenv";
import clientPromise from "./lib/mongodb.js"; // Adjusted path assuming server.js is at root
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cors from "cors"; // Import the cors middleware

// Load environment variables from .env.local
dotenv.config({ path: ".env.local" });

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Original GET route (optional, you can keep or remove)
app.get("/", (req, res) => {
  res.send("Hello World from Express.js!");
});

// --- Login Route --- (Moved from app/api/login/route.ts)
app.post("/api/login", async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    const client = await clientPromise;
    const db = client.db(); // Ensure your MONGODB_URI specifies the database, or pass it here

    const user = await db.collection("users").findOne({ email: userName });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (typeof user.password !== "string") {
      console.error("User password is not a string for user:", userName);
      return res.status(500).json({ message: "Authentication error" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      console.error("JWT_SECRET is not defined in .env.local");
      return res.status(500).json({ message: "Server configuration error" });
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, jwtSecret, {
      expiresIn: "1h",
    });

    return res
      .status(200)
      .json({ message: "Login successful", token, userId: user._id });
  } catch (error) {
    console.error("Login API error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// --- Register Route --- (Moved from app/api/register/route.ts)
app.post("/api/register", async (req, res) => {
  try {
    const {
      egn,
      lnch,
      nameCyrillic,
      nameLatin,
      email,
      phone,
      address,
      username,
      password,
    } = req.body;

    if (
      !egn ||
      !nameCyrillic ||
      !nameLatin ||
      !email ||
      !phone ||
      !address ||
      !username ||
      !password
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided." });
    }

    if (password.length < 10) {
      return res
        .status(400)
        .json({ message: "Password must be at least 10 characters long." });
    }
    if (!/^[0-9]{10}$/.test(egn)) {
      return res
        .status(400)
        .json({ message: "EGN must be exactly 10 digits." });
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    const client = await clientPromise;
    const db = client.db();
    const usersCollection = db.collection("users");

    const existingUserByEmail = await usersCollection.findOne({ email });
    if (existingUserByEmail) {
      return res
        .status(409)
        .json({ message: "User with this email already exists." });
    }

    const existingUserByUsername = await usersCollection.findOne({ username });
    if (existingUserByUsername) {
      return res
        .status(409)
        .json({ message: "User with this username already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      egn,
      lnch: lnch || null,
      nameCyrillic,
      nameLatin,
      email,
      phone,
      address,
      username,
      password: hashedPassword,
      createdAt: new Date(),
    };

    await usersCollection.insertOne(newUser);

    return res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Registration API error:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

// --- Route to get all registered users ---
app.get("/api/users", async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db();
    const users = await db.collection("users").find({}).toArray();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
