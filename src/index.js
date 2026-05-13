import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import connectDB from './db/index.js';
import app from './app.js';

connectDB().then(() => {
  // starts the app listen stuff if DB connection is successful
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`App is up and running on ${port}`);
  });
});
