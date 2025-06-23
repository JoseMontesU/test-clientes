import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ParametroEntity } from "../entity/parametro.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ParametroRepository {

    constructor(
        @InjectRepository(ParametroEntity)
        private readonly parametroRepo: Repository<ParametroEntity>,
    ) {}

    async findByDescripcion(descripcion: string): Promise<ParametroEntity> {
        return this.parametroRepo.findOne({
            where: { descripcion },
        });
    }
}