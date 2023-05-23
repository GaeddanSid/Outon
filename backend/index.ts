require('dotenv').config();
import express from "express";
import { Pool } from "pg";
import cors from "cors";

const app = express();
const port = 8080;

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
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10 ) : undefined,
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

app.get("/", (req, res) => {
  res.status(200).send("Testar testar!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
