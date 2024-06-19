import { IsNotEmpty } from "class-validator";

export class CreateClassDto {
    @IsNotEmpty({message: '课程名称不能为空'})
    name: string;
    
    description: string;
    
    cover_image: string;
    
    file_image: string;
    
    is_vip: number;
    
    @IsNotEmpty({message: '课程价格不能为空'})
    price: number;
    
    discout_price: number;
    
    @IsNotEmpty({message: '分类id不能为空'})
    categoryId: number;
}
