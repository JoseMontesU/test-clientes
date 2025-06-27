import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClienteEntity } from "../entity/cliente.entity";
import { Repository } from "typeorm";

@Injectable()
export class ClienteRepository {

    constructor(
        @InjectRepository(ClienteEntity)
        private readonly clienteRepo: Repository<ClienteEntity>,
    ) {}

    async saveCliente(cliente: ClienteEntity): Promise<ClienteEntity> {
        return this.clienteRepo.save(cliente);
    }

    async findByEmail(correo: string): Promise<ClienteEntity | null> {
        return this.clienteRepo.findOne({ where: { correo } });
    }
}