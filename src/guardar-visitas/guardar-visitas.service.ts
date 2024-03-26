import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VisitaDTO } from 'src/dto/visitas.dto';
import { Visita } from 'src/model/visitas.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class GuardarVisitasService {
  constructor(
    @InjectRepository(Visita) private visitaRepository: Repository<Visita>,
  ) {}

  async guardarVisita(datos: VisitaDTO) {
    if(!datos.token){
        let token: String = this.generarUUID();
        datos.token = token;
        this.visitaRepository.save(datos);
        console.log('guardado');
        return 
    }
    if(datos.token){
        const buscarPorToken= await this.visitaRepository.findOneBy({token:datos.token})
        console.log(buscarPorToken)
        if(buscarPorToken){
            console.log("aumentando visita repetida")
            return 
        }
    }
    
    
  }

  generarUUID(): string {
    return uuidv4();
  }
}
