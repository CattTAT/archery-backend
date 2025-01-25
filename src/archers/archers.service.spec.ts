import { Test, TestingModule } from '@nestjs/testing';
import { ArchersService } from './archers.service';

describe('ArchersService', () => {
  let service: ArchersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArchersService],
    }).compile();

    service = module.get<ArchersService>(ArchersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
