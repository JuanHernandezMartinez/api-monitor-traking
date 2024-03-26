import { VisitaDTO } from 'src/dto/visitas.dto';
import { Visita } from 'src/model/visitas.entity';
import { Repository } from 'typeorm';
export declare class GuardarVisitasService {
    private visitaRepository;
    constructor(visitaRepository: Repository<Visita>);
    guardarVisita(datos: VisitaDTO, tokenReq: any): Promise<String>;
    generarUUID(): string;
}
