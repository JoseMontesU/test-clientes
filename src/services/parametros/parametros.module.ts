import { Module } from '@nestjs/common';
import { ParametrosController } from './controller/parametros.controller';
import { ParametrosService } from './service/parametros.service';
import { ParametroRepository } from './repository/parametro.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParametroEntity } from './entity/parametro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParametroEntity])],
  controllers: [ParametrosController],
  providers: [ParametrosService, ParametroRepository],
  exports: [ParametrosService],
})
export class ParametrosModule {}
