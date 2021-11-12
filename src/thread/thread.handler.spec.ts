import { Test, TestingModule } from '@nestjs/testing';
import { ThreadHandler } from './thread.handler';

describe('ThreadService', () => {
  let service: ThreadHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThreadHandler],
    }).compile();

    service = module.get<ThreadHandler>(ThreadHandler);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
