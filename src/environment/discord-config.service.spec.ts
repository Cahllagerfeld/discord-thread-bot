import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { DiscordConfigService } from './discord-config.service';

describe('DiscordConfigService', () => {
  let service: DiscordConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [DiscordConfigService],
    }).compile();

    service = module.get<DiscordConfigService>(DiscordConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("should return a config that is not null", () => {
    const discordConfig = service.createDiscordOptions()
    expect(discordConfig).toBeDefined()
  })
});
