
import { RowDataPacket } from "mysql2"; 
import { promisePool } from "../config/db";

const selectAll = async () => {
  try {
    const [rows]: [RowDataPacket[], any] = await promisePool.query(
      "SELECT * FROM product"
    );
    return rows;
  } catch (err) {
    console.error("Database query error:", err);
  }
};

export default { selectAll };
