import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParametrosModule } from './services/parametros/parametros.module';
import { ClientesModule } from './services/clientes/clientes.module';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { RedisCacheModule } from './services/redis-cache/redis-cache.module';
import { DatabaseModule } from './helper/database.conexion';
import { ProxyModule } from './helper/proxy/proxy.module';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
      ttl: 0,
    }),
    ParametrosModule, 
    ClientesModule,
    RedisCacheModule,
    DatabaseModule,
    ProxyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
