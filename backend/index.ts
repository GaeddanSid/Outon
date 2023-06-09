import * as dotenv from "dotenv";
// require("dotenv").config();
import express from "express";
import { Pool } from "pg";
import cors from "cors";
import path from "path";

const app = express();
const port = 8080;

dotenv.config();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
});

app.get("/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (error) {
    console.error("Cannot find data from database", error);
    res.status(404).json({ error: "Something went wrong..." });
  }
});

app.get("/products/:id", async (req, res) => {
  const productId = req.params.id;
  console.log(productId);

  try {
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [
      productId,
    ]);
    if (result.rows.length === 0) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error("Cannot find data from database", error);
    res.status(500).json({ error: "Something went wrong..." });
  }
});

app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    console.error("Cannot retrieve users", error);
    res.status(500).json({ error: "Something went wrong..." });
  }
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const emailExists = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (emailExists.rows.length > 0) {
      res.status(400).json({ error: "Email already exists" });
      return;
    }

    const result = await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [email, password]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Cannot register user", error);
    res.status(500).json({ error: "Something went wrong..." });
  }
});

app.use(express.static(path.join(__dirname, "public")))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
