import { On } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Message } from 'discord.js';

@Injectable()
export class ThreadHandler {
    constructor(private readonly config: ConfigService) { }

    @On("messageCreate")
    async createThread(message: Message) {
    }
}
