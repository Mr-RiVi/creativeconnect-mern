import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routes/index.js';
import databaseConnection from './config/databaseConnection.js';

dotenv.config();
const app = express();
app.use(express.json({ limit: '1mb' }));
databaseConnection();

app.use(express.json({ limit: '1mb' }))
app.use(cors());

// app.get('/', (req, res) =>
//   res.status(200).json({ message: 'Server Up and Running' })
// )
app.use('/api', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
