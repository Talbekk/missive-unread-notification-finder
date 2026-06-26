import dotenv from 'dotenv';
import { fetchUnreadNotifications } from './fetchUnreadNotifications';

dotenv.config();

const main = async (): Promise<void> => {
  await fetchUnreadNotifications();
};

main();