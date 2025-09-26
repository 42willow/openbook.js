import { Work, WorkEditionResponse } from "./schemes/work";
import { Edition } from "./schemes/edition";
import { Author } from "./schemes/author";
import { SearchRequest, SearchResponse } from "./schemes/search";
export declare class OpenLibraryClient {
    private client;
    constructor();
    private request;
    getWork(id: string): Promise<Work>;
    getWorkEditions(id: string): Promise<WorkEditionResponse>;
    getEdition(id: string): Promise<Edition>;
    getAuthor(id: string): Promise<Author>;
    search(params: SearchRequest): Promise<SearchResponse>;
}
