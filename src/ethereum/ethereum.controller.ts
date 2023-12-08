import { Controller, Get } from '@nestjs/common';

@Controller('ethereum')
export class EthereumController {
  @Get()
  findAll(): string {
    return 'This action returns all ethereum';
  }
}
