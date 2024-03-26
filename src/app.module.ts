import { Module } from '@nestjs/common';

import { GuardarVisitasModule } from './guardar-visitas/guardar-visitas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visita } from './model/visitas.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'',
    password:'',
    database:'',
    entities:[Visita],
    synchronize:true
  })
    ,GuardarVisitasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
