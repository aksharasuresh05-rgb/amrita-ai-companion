import { McpApp, Module, ConfigModule } from '@nitrostack/core';
import { WikipediaModule } from './modules/wikipedia/wikipedia.module.js';

@McpApp({
    module: AppModule,
    server: {
        name: 'amrita-ai-companion',
        version: '1.0.0'
    },
    logging: {
        level: 'info'
    }
})
@Module({
    name: 'amrita-ai-companion',
    description: 'AI Companion MCP Server',
    imports: [
        ConfigModule.forRoot(),
        WikipediaModule
    ],
})
export class AppModule {}
