import {
    ToolDecorator as Tool,
    Injectable,
    ExecutionContext,
    z
} from '@nitrostack/core';

import { WikipediaService } from './wikipedia.service.js';

const SearchWikipediaSchema = z.object({
    topic: z.string().describe('Topic to search on Wikipedia')
});

@Injectable({ deps: [WikipediaService] })
export class WikipediaTools {
    constructor(
        private readonly wikipediaService: WikipediaService
    ) {}

    @Tool({
        name: 'search_wikipedia',
        description: 'Search Wikipedia and return a summary.',
        inputSchema: SearchWikipediaSchema
    })
    async searchWikipedia(
        args: z.infer<typeof SearchWikipediaSchema>,
        ctx: ExecutionContext
    ) {
        ctx.logger.info('Wikipedia search', {
            topic: args.topic
        });

        return await this.wikipediaService.searchWikipedia(
            args.topic
        );
    }
}