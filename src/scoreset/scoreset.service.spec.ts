import { Test, TestingModule } from '@nestjs/testing';
import { ScoresetService } from './scoreset.service';

describe('ScoresetService', () => {
  let service: ScoresetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScoresetService],
    }).compile();

    service = module.get<ScoresetService>(ScoresetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
