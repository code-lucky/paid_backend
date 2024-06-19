import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { Classes } from 'src/api/entitys/class.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/api/entitys/category.entity';

@Injectable()
export class IndexService {

  @InjectRepository(Classes)
  private classRepository: Repository<Classes>;

  @InjectRepository(Category)
  private categoryRepository: Repository<Category>;

  async getClassList(id: number, page: number, limit: number) {
    const [list, total] = await this.classRepository.findAndCount(
      {
        where: { categoryId: id, delete: 0 },
        skip: (page - 1) * limit,
        take: limit,
      },
    );

    const data = {
      list,
      total
    }
    return data;
  }

  async categouryList() {
    const list = await this.categoryRepository.find({
      where: { delete: 0 },
    });
    return list;
  }

}
