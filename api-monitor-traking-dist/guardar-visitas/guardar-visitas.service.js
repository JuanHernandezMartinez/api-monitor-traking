"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardarVisitasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const visitas_entity_1 = require("../model/visitas.entity");
const typeorm_2 = require("typeorm");
const uuid_1 = require("uuid");
let GuardarVisitasService = class GuardarVisitasService {
    constructor(visitaRepository) {
        this.visitaRepository = visitaRepository;
    }
    async guardarVisita(datos, tokenReq) {
        if (tokenReq.token === null) {
            let token = this.generarUUID();
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
                buscarPorToken.visitasRepetidas += 1;
                this.visitaRepository.save(buscarPorToken);
                console.log('visita aumentada');
                return;
            }
        }
    }
    generarUUID() {
        return (0, uuid_1.v4)();
    }
};
exports.GuardarVisitasService = GuardarVisitasService;
exports.GuardarVisitasService = GuardarVisitasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(visitas_entity_1.Visita)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GuardarVisitasService);
//# sourceMappingURL=guardar-visitas.service.js.map