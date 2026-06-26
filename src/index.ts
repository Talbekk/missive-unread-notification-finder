import dotenv from 'dotenv';

// Load .env file into process.env
dotenv.config();

// Access variables with full type support
const apiKey: string | undefined = process.env.MISSIVE_API_KEY;

if (!apiKey) {
  throw new Error('Missing required environment variables');
}

export const getUnreadNotificationCount = async (): Promise<string> => {
    console.log(`hey`);
    return 'hello';
}

getUnreadNotificationCount();