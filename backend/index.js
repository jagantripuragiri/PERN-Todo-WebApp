import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todos.js";


const PORT =  5000;

const app = express();

import pool from "./db.js";

(async () => {
  try {
    const result = await pool.query("SELECT 1");
    console.log("✅ Database connected successfully");
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
  }
})();


app.use(cors());
app.use(express.json());

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

