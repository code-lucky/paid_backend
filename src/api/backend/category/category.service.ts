import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from 'src/api/entitys/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {

  @InjectRepository(Category)
  private categoryRepository: Repository<Category>;

  async create(createCategoryDto: CreateCategoryDto) {
    await this.categoryRepository.save(createCategoryDto);
    return '创建成功'
  }

  async update(updateCategoryDto: UpdateCategoryDto) {
    await this.categoryRepository.update(updateCategoryDto.id, updateCategoryDto);
    return '更新成功'
  }

  async remove(id: number) {
    await this.categoryRepository.update(id, {delete: 1});
    return '删除成功'
  }
}
