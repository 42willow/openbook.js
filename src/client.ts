import axios, { AxiosInstance } from "axios";
import {
  WorkSchema,
  Work,
  WorkEdition,
  WorkEditionResponse,
  WorkEditionSchema,
  WorkEditionResponseSchema,
} from "./schemes/work";
import { EditionSchema, Edition } from "./schemes/edition";
import {
  Author,
  AuthorSchema,
  AuthorWorksResponse,
  AuthorWorksResponseSchema,
  AuthorWorksQuery,
} from "./schemes/author";
import {
  SearchRequest,
  SearchResponse,
  SearchResponseSchema,
  SearchAuthorResponse,
  SearchAuthorResponseSchema,
} from "./schemes/search";
export class OpenLibraryClient {
  private client: AxiosInstance;

  /**
   * @param userAgent - (Optional) A string specifying the User-Agent for API requests.
   * If not provided, a default value will be used.
   *
   * This should include the name of your application and a contact email or phone number.
   * @example
   * const client = new OpenLibraryClient(); // uses default User-Agent
   * const client = new OpenLibraryClient("MyAppName/1.0 (myemail@example.com)");
   */
  constructor(userAgent?: string) {
    const defaultAgent = "MyAppName/1.0 (myemail@example.com)";
    this.client = axios.create({
      baseURL: "https://openlibrary.org",
      headers: {
        "User-Agent": userAgent || defaultAgent,
      },
    });
  }

  private async request<T>(endpoint: string): Promise<T> {
    try {
      const res = await this.client.get<T>(endpoint);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status ?? 0;
        const message = error.response?.data?.message ?? "Unknown error";
        throw new Error(`Failed to fetch ${endpoint}: ${status} ${message}`);
      }
      throw new Error(`Failed to fetch ${endpoint}: ${error}`);
    }
  }

  async getWork(id: string): Promise<Work> {
    const data = await this.request<any>(`/works/${id}.json`);
    return WorkSchema.parse(data);
  }

  async getWorkEditions(id: string): Promise<WorkEditionResponse> {
    const data = await this.request<any>(`/works/${id}/editions.json`);
    return WorkEditionResponseSchema.parse(data);
  }

  async getEdition(
    params: string | { id?: string; isbn?: string }
  ): Promise<Edition> {
    let id: string | undefined;
    let isbn: string | undefined;

    if (typeof params === "string") {
      id = params;
      console.warn(
        "Deprecation Warning: Calling getEdition with a string id is deprecated. Please use an object with either 'id' or 'isbn' property."
      );
    } else {
      ({ id, isbn } = params);
    }

    if ((!id && !isbn) || (id && isbn)) {
      throw new Error("Either id or isbn must be provided");
    }

    const data = await this.request<any>(
      `${isbn ? `isbn:${isbn}` : `books/${id}`}.json`
    );
    return EditionSchema.parse(data);
  }

  async getAuthor(id: string): Promise<Author> {
    const data = await this.request<any>(`/authors/${id}.json`);
    return AuthorSchema.parse(data);
  }

  async getAuthorWorks(
    id: string,
    { limit, offset }: AuthorWorksQuery = {}
  ): Promise<AuthorWorksResponse> {
    const params = new URLSearchParams();

    if (limit !== undefined) params.set("limit", limit.toString());
    if (offset !== undefined) params.set("offset", offset.toString());

    const query = params.toString();
    const url = `/authors/${id}/works.json${query ? `?${query}` : ""}`;

    const data = await this.request<any>(url);
    return AuthorWorksResponseSchema.parse(data);
  }

  async search(params: SearchRequest): Promise<SearchResponse> {
    const data = await this.request<any>(
      `/search.json?${new URLSearchParams(params as any)}`
    );
    return SearchResponseSchema.parse(data);
  }

  async searchAuthors(params: SearchRequest): Promise<SearchAuthorResponse> {
    const data = await this.request<any>(
      `/search/authors.json?${new URLSearchParams(params as any)}`
    );
    return SearchAuthorResponseSchema.parse(data);
  }
}
