import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('SECURE_DOC') private readonly secureDocClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser() {
    return this.secureDocClient.send({ cmd: 'created_user' }, {});
  }
}
