import { Module } from '@nestjs/common';
import { ClientesService } from './service/clientes.service';
import { ClientesController } from './controller/clientes.controller';
import { ClienteRepository } from './repository/cliente.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from './entity/cliente.entity';
import { ClientProxyMicroservice } from 'src/helper/proxy/client.proxy';
import { RedisCacheService } from '../redis-cache/redis-cache.service';
import { RedisCacheModule } from '../redis-cache/redis-cache.module';
import { CacheModule } from '@nestjs/cache-manager';
import { ParametrosService } from '../parametros/service/parametros.service';
import { ParametroRepository } from '../parametros/repository/parametro.repository';
import { ParametroEntity } from '../parametros/entity/parametro.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClienteEntity, ParametroEntity]),
    RedisCacheModule,
    CacheModule.register(),
  ],
  controllers: [ClientesController],
  providers: [
    ClientesService, 
    ClienteRepository, 
    ClientProxyMicroservice,
    RedisCacheService,
    ParametrosService,
    ParametroRepository,
  ],
})
export class ClientesModule {}
