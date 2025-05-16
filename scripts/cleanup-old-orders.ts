import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

async function cleanupOldOrders() {
  const res = await pool.query(
    `DELETE FROM orders WHERE created_at < NOW() - INTERVAL '90 days'`
  );
  console.log(`Deleted ${res.rowCount} old orders.`);
  await pool.end();
}

cleanupOldOrders().catch(err => {
  console.error('Cleanup failed:', err);
  process.exit(1);
});

// To run: npx ts-node scripts/cleanup-old-orders.ts
// Or add to your crontab for scheduled cleanup 