import { Module } from '@nestjs/common';
import { GuardarVisitasService } from './guardar-visitas.service';
import { GuardarVisitasController } from './guardar-visitas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visita } from 'src/model/visitas.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Visita])],
  providers: [GuardarVisitasService],
  controllers: [GuardarVisitasController]
})
export class GuardarVisitasModule {}
