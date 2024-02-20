import express from 'express';
import sequelize from './config/database';
import { authenticateJWT } from './middleware/auth';
import authRoutes from './routes/auth';

const app = express();

app.use(express.json());

// Use authentication middleware for protected routes
app.use('/protected', authenticateJWT);

// Your protected routes go here...

// Authentication routes
app.use('/auth', authRoutes);

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
  });
});
