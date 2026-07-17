import { Injectable } from '@nitrostack/core';

@Injectable()
export class WikipediaService {
    async searchWikipedia(topic: string) {
        const response = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`
        );

        if (!response.ok) {
            throw new Error(`Wikipedia article not found: ${topic}`);
        }

        const data: any = await response.json();

        return {
            title: data.title,
            summary: data.extract,
            url: data.content_urls?.desktop?.page
        };
    }
}