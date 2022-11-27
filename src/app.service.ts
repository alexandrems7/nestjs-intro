import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Favor verificar em: http://localhost:3000/api';
  }
}
