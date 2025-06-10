import { Controller, Post,Get,Delete,Put,Patch,Body,Param, Query, DefaultValuePipe, ParseIntPipe } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantEntity } from '../entities/restaurant.entity';
import { AddressEntity } from 'src/entities/address.entity';
import { MenuEntity } from 'src/entities/menu.entity';
import { Pagination } from 'nestjs-typeorm-paginate';


interface restaurant{
    id: number,
    name: string,
    address: AddressEntity,
}

@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly RestaurantService:RestaurantService ){}

    @Post()
    create(@Body() createrestaurant : Partial<RestaurantEntity>){
        return this.RestaurantService.create(createrestaurant)
    }

    @Get()
    findAll(): Promise<RestaurantEntity[]>{
        return this.RestaurantService.findAll();
    }

    @Get('')
    async index(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    ): Promise<Pagination<RestaurantEntity>>{
        limit = limit > 10 ? 10 : limit;
        return this.RestaurantService.paginate({page,limit,route: 'http://restaurant.com/restaurant'})
    }

    @Get(':id')
    findOne(@Param('id') id:number):Promise<RestaurantEntity |null>{
        return this.RestaurantService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number,@Body() restaurant:RestaurantEntity):Promise<RestaurantEntity>{
        return this.RestaurantService.update(id,restaurant)
    }

    @Patch(':id')
    updatepartial(@Param('id') id:number,@Body() restaurant:Partial<RestaurantEntity>):Promise<RestaurantEntity>{
        return this.RestaurantService.updatePartion(id,restaurant);
    }

    @Delete(':id')
    delete(@Param('id') id:number):Promise<void>{
        return this.RestaurantService.delete(id);
    }

    @Get(':id')
    findMenu(@Param('id') id:number):Promise<MenuEntity[]>{
        return this.RestaurantService.findMenu(id);
    }

}
