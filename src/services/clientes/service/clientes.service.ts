import { Injectable } from '@nestjs/common';
import { ClienteRepository } from '../repository/cliente.repository';
import { lastValueFrom } from 'rxjs';
import { ClientProxyMicroservice } from 'src/helper/proxy/client.proxy';
import { RedisCacheService } from 'src/services/redis-cache/redis-cache.service';


@Injectable()
export class ClientesService {

    constructor(
        private readonly clienteRepository: ClienteRepository,
        private readonly proxy: ClientProxyMicroservice,
        private readonly cacheService: RedisCacheService,
    ) {}

    private clientCorreos = this.proxy.clientProxyCorreos();

    async saveCliente(cliente: any): Promise<any> {
        const clienteSaved = await this.clienteRepository.saveCliente(cliente);
        if (!clienteSaved) {
            return {
                success: false,
                message: 'Failed to save cliente',
                data: null,
            };
        }
        
        const envioCorreoConfig: any = await this.cacheService.getEnvioCorreoConfig();
        
        if (!envioCorreoConfig) {
            return {
                success: false,
                message: 'Failed to retrieve email configuration',
                data: null,
            };
        } else if (envioCorreoConfig.descripcion === 'envio_correo' && 
            envioCorreoConfig.valor === true
        ) {
            await lastValueFrom(this.clientCorreos.send('ENVIAR_CORREO', 
            { asunto: "Bienvenida", mensaje: "Bienvedio, gracias por registrarte ", estado: "ENVIADO" }));
        }        

        return {
            success: true,
            message: 'Cliente saved successfully',
            data: clienteSaved,
        };
    }

    async validateCliente(correo: string, password: string): Promise<any> {

    const cliente = await this.clienteRepository.findByEmail(correo);
    
    if (!cliente) {
        return { success: false, message: 'Correo o contraseña incorrectos.' };
    }

    
    if (cliente.password !== password) {
        return { success: false, message: 'Correo o contraseña incorrectos.' };
    }

    return { success: true, message: 'Cliente validado correctamente.', data: cliente };
  }
}
