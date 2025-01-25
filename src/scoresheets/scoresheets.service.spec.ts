import { Test, TestingModule } from '@nestjs/testing';
import { ScoresheetsService } from './scoresheets.service';

describe('ScoresheetsService', () => {
  let service: ScoresheetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScoresheetsService],
    }).compile();

    service = module.get<ScoresheetsService>(ScoresheetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
