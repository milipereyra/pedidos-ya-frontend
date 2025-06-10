import { Controller, Post,Get,Delete,Put,Patch,Body,Param } from '@nestjs/common';
import { MenuEntity } from '../entities/menu.entity';
import { MenuService } from './menu.service';
import { RestaurantEntity } from 'src/entities/restaurant.entity';

interface Menu {
    idMenu:number,
    name:string,
    description:string,
    price:number,
    imageUrl:string,
    restaurant :RestaurantEntity,
}

@Controller('menu')
export class MenuController {
    constructor(private readonly MenuService:MenuService ){}

    @Post()
    create(@Body() createMenu : Partial<MenuEntity>){
        return this.MenuService.create(createMenu)
    }

    @Get()
    findAll(): Promise<MenuEntity[]>{
        return this.MenuService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:number):Promise<MenuEntity |null>{
        return this.MenuService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number,@Body() Menu:MenuEntity):Promise<MenuEntity>{
        return this.MenuService.update(id,Menu)
    }

    @Patch(':id')
    updatepartial(@Param('id') id:number,@Body() menu:Partial<MenuEntity>):Promise<MenuEntity>{
        return this.MenuService.updatePartion(id,menu);
    }

    @Delete(':id')
    delete(@Param('id') id:number):Promise<void>{
        return this.MenuService.delete(id);
    }

}
