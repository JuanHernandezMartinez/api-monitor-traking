import { GuardarVisitasService } from './guardar-visitas.service';
export declare class GuardarVisitasController {
    private guardarVisitasService;
    constructor(guardarVisitasService: GuardarVisitasService);
    guardar(req: any, tokenReq: any): Promise<String>;
}
