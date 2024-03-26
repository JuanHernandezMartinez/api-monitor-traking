import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuardarVisitasModule } from './guardar-visitas/guardar-visitas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visita } from './model/visitas.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'',
    database:'elmonitor-032024',
    entities:[Visita],
    synchronize:true
  })
    ,GuardarVisitasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
