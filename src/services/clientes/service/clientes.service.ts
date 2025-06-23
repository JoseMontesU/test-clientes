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
        
        const envioCorreoConfig = await this.cacheService.getEnvioCorreoConfig();
        console.log('Envio Correo Config Perrroeeereer:', envioCorreoConfig);

        await lastValueFrom(this.clientCorreos.send('ENVIAR_CORREO', 
            { asunto: "Bienvenida", mensaje: "Hola usted es un ludopata", estado: "ENVIADO" }));

        return {
            success: true,
            message: 'Cliente saved successfully',
            data: clienteSaved,
        };
    }
}
