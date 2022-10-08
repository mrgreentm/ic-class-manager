import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import DatabaseModule from './database/database.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.TYPEORM_HOST,
      port: +process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME || 'root',
      database: process.env.TYPEORM_DATABASE || 'ic_class_manager',
      password: process.env.TYPEORM_PASSWORD || 'nikolatesla06@',
      entities: [],
      synchronize: false,
      logging: false,
      migrations: ['database/migrations/**/*.js'],
    }),
    StudentsModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
