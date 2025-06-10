import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { menuImports } from './menu/providers';
import { RestaurantImports } from './restaurant/restaurantProviders';


@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host:'localhost',
        port: 5433,
        username:'postgres',
        password: '15726',
        database:'restaurant',
        autoLoadEntities: true,
        synchronize: true,
    }),
    TypeOrmModule.forFeature([...menuImports.entities,...RestaurantImports.entities])
  ],
  controllers: [AppController,...RestaurantImports.controllers,...menuImports.controllers],
  providers: [AppService,...RestaurantImports.providers,...menuImports.providers],
})
export class AppModule {}
