import { Injectable } from '@nestjs/common';

@Injectable()
export class SecuredocService {
  getHello(): string {
    return 'Hello World!';
  }
}
