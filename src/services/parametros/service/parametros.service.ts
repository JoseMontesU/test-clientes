import { Injectable } from '@nestjs/common';
import { ParametroRepository } from '../repository/parametro.repository';

@Injectable()
export class ParametrosService {
    constructor(
        private readonly parametrosRepository: ParametroRepository, // Replace 'any' with the actual type of your repository
    ) {}

    async findByDescripcion(descripcion: string): Promise<any> {
        return this.parametrosRepository.findByDescripcion(descripcion);
    }
}
