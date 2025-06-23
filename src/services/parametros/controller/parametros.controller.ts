import { Controller } from '@nestjs/common';
import { ParametrosService } from '../service/parametros.service';

@Controller()
export class ParametrosController {
  constructor(private readonly parametrosService: ParametrosService) {}
}
