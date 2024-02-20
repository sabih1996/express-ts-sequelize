import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/User';
import dotenv from 'dotenv';

dotenv.config();
//TEST
const sequelize = new Sequelize(`${process.env.DB_URL}`, {
  models: [User],
});

export default sequelize;
