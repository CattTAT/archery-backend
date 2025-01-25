import { Test, TestingModule } from '@nestjs/testing';
import { ArrowsController } from './arrows.controller';
import { ArrowsService } from './arrows.service';

describe('ArrowsController', () => {
  let controller: ArrowsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArrowsController],
      providers: [ArrowsService],
    }).compile();

    controller = module.get<ArrowsController>(ArrowsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
