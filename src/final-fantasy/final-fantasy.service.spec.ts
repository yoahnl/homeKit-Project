import { Test, TestingModule } from '@nestjs/testing';
import { FinalFantasyService } from './final-fantasy.service';

describe('FinalFantasyService', () => {
  let service: FinalFantasyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinalFantasyService],
    }).compile();

    service = module.get<FinalFantasyService>(FinalFantasyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
