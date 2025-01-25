import { Test, TestingModule } from '@nestjs/testing';
import { ArchersController } from './archers.controller';

describe('ArchersController', () => {
  let controller: ArchersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArchersController],
    }).compile();

    controller = module.get<ArchersController>(ArchersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
