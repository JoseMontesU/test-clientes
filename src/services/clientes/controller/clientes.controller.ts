import { Controller } from '@nestjs/common';
import { ClientesService } from '../service/clientes.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @MessagePattern('SAVE_CLIENTE')
  async saveCliente(cliente: any): Promise<any> {
    return this.clientesService.saveCliente(cliente);
  }
  @MessagePattern('VALIDATE_CLIENTE')
  async validateCliente(data: { correo: string, password: string }): Promise<any> {

    return this.clientesService.validateCliente(data.correo, data.password);
  }
}
