/* eslint-disable prettier/prettier */
import { UsersEntity } from './src/users/entities/users.entity';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { $Users1665190527063 } from './database/migrations/1665190527063-$users';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME || 'root',
  database: process.env.TYPEORM_DATABASE || 'ic_class_manager',
  password: process.env.TYPEORM_PASSWORD || 'nikolatesla06@',
  entities: [UsersEntity],
  migrations: [$Users1665190527063],
});
