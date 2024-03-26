import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { GuardarVisitasService } from './guardar-visitas.service';
import { VisitaDTO } from 'src/dto/visitas.dto';
import * as useragent from 'useragent';
@Controller('guardar-visitas')
export class GuardarVisitasController {
  constructor(private guardarVisitasService: GuardarVisitasService) {}
  @Post()
  guardar(@Req() req, @Body() tokenReq:String) {
    console.log(tokenReq)
    const clientIP = req.ip || req.connection.remoteAddress;
    const ipv4Address = clientIP.includes('::ffff:') ? clientIP.split(':').pop() : clientIP;
    const userAgentString = req.headers['user-agent'];
    const userAgent = useragent.parse(userAgentString);
    const deviceType = userAgent.isMobile ? 'Móvil' : 'Escritorio';
    const operatingSystem = userAgent.os.toString();

    const datos: VisitaDTO = {
      direccionIP: ipv4Address,
      dispositivo: deviceType,
      sistema_operativo: operatingSystem,
      token:tokenReq?tokenReq:null
    };
    this.guardarVisitasService.guardarVisita(datos);
    return 
  }
}
