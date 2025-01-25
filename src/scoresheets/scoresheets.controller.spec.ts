import { Test, TestingModule } from '@nestjs/testing';
import { ScoresheetsController } from './scoresheets.controller';
import { ScoresheetsService } from './scoresheets.service';

describe('ScoresheetsController', () => {
  let controller: ScoresheetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScoresheetsController],
      providers: [ScoresheetsService],
    }).compile();

    controller = module.get<ScoresheetsController>(ScoresheetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
