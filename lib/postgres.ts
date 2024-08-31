import { Pool } from "pg";

// Utility function to safely retrieve environment variables
const getEnvVar = (key: string): string => {
    const value = process.env[key];
    if (value === undefined) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
};

// Create a new Pool instance with the configuration
export const pool = new Pool({
    host: getEnvVar('AUTH_DATABASE_HOST'),
    port: parseInt(getEnvVar('AUTH_DATABASE_PORT'), 10),
    database: getEnvVar('AUTH_DATABASE_NAME'),
    user: getEnvVar('AUTH_DATABASE_USER'),
    password: getEnvVar('AUTH_DATABASE_PASSWORD'),
});
