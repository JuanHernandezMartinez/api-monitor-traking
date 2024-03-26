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

  async guardarVisita(datos: VisitaDTO, tokenReq) {
    if (tokenReq.token === null) {
      let token: String = this.generarUUID();
      datos.token = token;
      this.visitaRepository.save(datos);
      console.log('guardado');
      return token;
    }
    if (tokenReq.token !== null) {
      let buscarPorToken = await this.visitaRepository.findOneBy({
        token: tokenReq.token,
      });
      if (buscarPorToken) {
        buscarPorToken.visitasRepetidas+=1;
        this.visitaRepository.save(buscarPorToken);
        console.log('visita aumentada');
        return;
      }
    }
  }

  generarUUID(): string {
    return uuidv4();
  }
}
