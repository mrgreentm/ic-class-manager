import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';

@Module({
  imports: [],
  controllers: [StudentsController],
  providers: [],
  exports: [],
})
export class StudentsModule {}
