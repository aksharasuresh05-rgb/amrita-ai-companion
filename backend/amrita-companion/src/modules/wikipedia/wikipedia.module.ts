import { Module } from '@nitrostack/core';
import { WikipediaService } from './wikipedia.service.js';
import { WikipediaTools } from './wikipedia.tools.js';

@Module({
  name: 'wikipedia',
  description: 'Wikipedia search module',
  controllers: [WikipediaTools],
  providers: [WikipediaService],
})
export class WikipediaModule {}