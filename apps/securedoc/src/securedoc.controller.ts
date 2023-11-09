import { Controller, Get } from '@nestjs/common';
import { SecuredocService } from './securedoc.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class SecuredocController {
  constructor(private readonly securedocService: SecuredocService) {}

  @Get()
  getHello(): string {
    return this.securedocService.getHello();
  }

  @EventPattern('user_created')
  handleUserCreated(data: string) {
    console.log(`User created ${data}`);
  }
}
