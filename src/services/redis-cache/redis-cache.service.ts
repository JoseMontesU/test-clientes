import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Cache } from "cache-manager";
import { ParametrosService } from '../parametros/service/parametros.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager'

@Injectable()
export class RedisCacheService implements OnModuleInit{
    constructor(
        @Inject(CACHE_MANAGER)
        private cacheManager: Cache, 
        private readonly parametrosService: ParametrosService,
    ) {}

    async onModuleInit() {
        const data = await this.parametrosService.findByDescripcion('envio_correo');
        await this.cacheManager.set('config:envio_correo', data);
        console.log('Cache initialized with envio_correo parameter', data);
    }

    async getEnvioCorreoConfig() {
    return await this.cacheManager.get('config:envio_correo');
  }

}
