"use server";
import { pool } from "@/lib/postgres";

/**
 * Function to clear stale verification tokens from the database.
 * Tokens are considered stale if they have expired.
 * @throws {Error} - Throws an error if the database query fails.
 */

export const clearStaleTokens = async () => {
  try {
    // Execute SQL query to delete tokens that have expired
    await pool.query("DELETE FROM verification_token WHERE expires < NOW();");
  } catch (error) {
    console.error("Failed to clear stale tokens:", error);
    throw error;
  }
};
