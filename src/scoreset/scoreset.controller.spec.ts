import { Test, TestingModule } from '@nestjs/testing';
import { ScoresetController } from './scoreset.controller';
import { ScoresetService } from './scoreset.service';

describe('ScoresetController', () => {
  let controller: ScoresetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScoresetController],
      providers: [ScoresetService],
    }).compile();

    controller = module.get<ScoresetController>(ScoresetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
