import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersEntity } from 'src/users/entities/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        type: 'mysql',
        host: process.env.TYPEORM_HOST,
        port: +process.env.TYPEORM_PORT,
        username: process.env.TYPEORM_USERNAME || 'root',
        database: process.env.TYPEORM_DATABASE || 'ic_class_manager',
        password: process.env.TYPEORM_PASSWORD || 'nikolatesla06@',
        entities: [UsersEntity],
        autoLoadEntities: true,
      }),
    }),
  ],
})
class DatabaseModule {}

export default DatabaseModule;
