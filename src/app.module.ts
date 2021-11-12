import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiscordConfigService } from './environment/discord-config.service';
import { ThreadModule } from './thread/thread.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DiscordModule.forRootAsync({ useClass: DiscordConfigService }),
    ThreadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
