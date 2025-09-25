import { Work } from "./schemes/work";
import { Book } from "./schemes/book";
import { SearchRequest, SearchResponse } from "./schemes/search";
export declare class OpenLibraryClient {
    private client;
    constructor();
    private request;
    getWork(id: string): Promise<Work>;
    getBook(id: string): Promise<Book>;
    search(params: SearchRequest): Promise<SearchResponse>;
}
