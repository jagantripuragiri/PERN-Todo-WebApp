import { Pool } from "pg";


const pool = new Pool({
  user: "postgres",
  password: "7569899488@Mac@com",
  host: "localhost",
  port: 5432,
  database: "todo",
});

export default pool;
