import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { In, Repository } from 'typeorm';
import { Classes } from 'src/api/entitys/class.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClassesService {

  @InjectRepository(Classes)
  private classRepository: Repository<Classes>;

  async create(createClassDto: CreateClassDto) {
    await this.classRepository.save(createClassDto);
    return '新增成功'
  }

  async update(updateClassDto: UpdateClassDto) {
    await this.classRepository.update(updateClassDto.id, updateClassDto);
    return '更新成功'
  }

  remove(id: number) {
    this.classRepository.update(id, {delete: 1});
    return '删除成功'
  }
}
