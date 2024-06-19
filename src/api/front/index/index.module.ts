import { Module } from '@nestjs/common';
import { IndexService } from './index.service';
import { IndexController } from './index.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/api/entitys/category.entity';
import { Classes } from 'src/api/entitys/class.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category, Classes]),
  ],
  controllers: [IndexController],
  providers: [IndexService],
})
export class IndexModule {}
