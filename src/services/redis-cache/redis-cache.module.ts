import { Module, Param } from '@nestjs/common';
import { RedisCacheService } from './redis-cache.service';
import { RedisCacheController } from './redis-cache.controller';
import { ParametrosModule } from '../parametros/parametros.module';
import { ParametrosService } from '../parametros/service/parametros.service';
import { CacheModule } from '@nestjs/cache-manager';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParametroEntity } from '../parametros/entity/parametro.entity';
import { ParametroRepository } from '../parametros/repository/parametro.repository';

@Module({
  imports: [CacheModule.register(),
     ParametrosModule,
     TypeOrmModule.forFeature([ParametroEntity]), 
    ],
  controllers: [RedisCacheController],
  providers: [RedisCacheService, ParametrosService, ParametroRepository],
})
export class RedisCacheModule {}
