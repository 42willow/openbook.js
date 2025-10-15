import { Work, WorkEditionResponse } from "./schemes/work";
import { Edition } from "./schemes/edition";
import { Author, AuthorWorksResponse } from "./schemes/author";
import { SearchRequest, SearchResponse, SearchAuthorResponse } from "./schemes/search";
export declare class OpenLibraryClient {
    private client;
    /**
     * @param userAgent - (Optional) A string specifying the User-Agent for API requests.
     * If not provided, a default value will be used.
     *
     * This should include the name of your application and a contact email or phone number.
     * @example
     * const client = new OpenLibraryClient(); // uses default User-Agent
     * const client = new OpenLibraryClient("MyAppName/1.0 (myemail@example.com)");
     */
    constructor(userAgent?: string);
    private request;
    getWork(id: string): Promise<Work>;
    getWorkEditions(id: string): Promise<WorkEditionResponse>;
    getEdition(params: string | {
        id?: string;
        isbn?: string;
    }): Promise<Edition>;
    getAuthor(id: string): Promise<Author>;
    getAuthorWorks(id: string): Promise<AuthorWorksResponse>;
    search(params: SearchRequest): Promise<SearchResponse>;
    searchAuthors(params: SearchRequest): Promise<SearchAuthorResponse>;
}
