import { Module } from '@nestjs/common';
import { SecuredocController } from './securedoc.controller';
import { SecuredocService } from './securedoc.service';

@Module({
  imports: [],
  controllers: [SecuredocController],
  providers: [SecuredocService],
})
export class SecuredocModule {}
