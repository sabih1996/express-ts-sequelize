import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/User';
import dotenv from 'dotenv';

dotenv.config();

//DB
const sequelize = new Sequelize(`${process.env.DB_URL}`, {
  models: [User],
});

export default sequelize;
