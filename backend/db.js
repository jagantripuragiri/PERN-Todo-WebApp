import { Pool } from "pg";


const pool = new Pool({
  user: "postgres",
  password: "mymacpass",
  host: "localhost",
  port: 5432,
  database: "todo",
});

export default pool;
