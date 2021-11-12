import { Module } from '@nestjs/common';
import { ThreadHandler } from './thread.handler';

@Module({
  providers: [ThreadHandler]
})
export class ThreadModule {}
