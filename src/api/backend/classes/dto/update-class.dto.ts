import { PartialType } from '@nestjs/swagger';
import { CreateClassDto } from './create-class.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateClassDto extends PartialType(CreateClassDto) {
    @IsNotEmpty({message: '课程id不能为空'})
    id: number;
}
