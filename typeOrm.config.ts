/* eslint-disable prettier/prettier */
import { $StudentsMigration1665188476156 } from './database/migrations/1665188476156-$students';
import { StudentsEntity } from './src/students/entities/student.entity';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  database: process.env.TYPEORM_DATABASE,
  password: process.env.TYPEORM_PASSWORD,
  entities: [StudentsEntity],
  migrations: [$StudentsMigration1665188476156],
});
