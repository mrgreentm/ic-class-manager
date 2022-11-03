import { AuthModule } from './auth/auth.module';
import { UsersEntity } from './users/entities/users.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import DatabaseModule from './database/database.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.TYPEORM_HOST,
      port: +process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME || 'root',
      database: process.env.TYPEORM_DATABASE || 'ic_class_manager',
      password: process.env.TYPEORM_PASSWORD || 'nikolatesla06@',
      entities: [UsersEntity],
      synchronize: false,
      logging: false,
      migrations: ['database/migrations/**/*.js'],
    }),
    UsersModule,
    AuthModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
