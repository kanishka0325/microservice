import { Test, TestingModule } from '@nestjs/testing';
import { SecuredocController } from './securedoc.controller';
import { SecuredocService } from './securedoc.service';

describe('SecuredocController', () => {
  let securedocController: SecuredocController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SecuredocController],
      providers: [SecuredocService],
    }).compile();

    securedocController = app.get<SecuredocController>(SecuredocController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(securedocController.getHello()).toBe('Hello World!');
    });
  });
});
