"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenLibraryClient = void 0;
const axios_1 = __importDefault(require("axios"));
const work_1 = require("./schemes/work");
const edition_1 = require("./schemes/edition");
const author_1 = require("./schemes/author");
const search_1 = require("./schemes/search");
class OpenLibraryClient {
    /**
     * @param userAgent - (Optional) A string specifying the User-Agent for API requests.
     * If not provided, a default value will be used.
     *
     * This should include the name of your application and a contact email or phone number.
     * @example
     * const client = new OpenLibraryClient(); // uses default User-Agent
     * const client = new OpenLibraryClient("MyAppName/1.0 (myemail@example.com)");
     */
    constructor(userAgent) {
        const defaultAgent = "MyAppName/1.0 (myemail@example.com)";
        this.client = axios_1.default.create({
            baseURL: "https://openlibrary.org",
            headers: {
                "User-Agent": userAgent || defaultAgent,
            },
        });
    }
    async request(endpoint) {
        try {
            const res = await this.client.get(endpoint);
            return res.data;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                const status = error.response?.status ?? 0;
                const message = error.response?.data?.message ?? "Unknown error";
                throw new Error(`Failed to fetch ${endpoint}: ${status} ${message}`);
            }
            throw new Error(`Failed to fetch ${endpoint}: ${error}`);
        }
    }
    async getWork(id) {
        const data = await this.request(`/works/${id}.json`);
        return work_1.WorkSchema.parse(data);
    }
    async getWorkEditions(id) {
        const data = await this.request(`/works/${id}/editions.json`);
        return work_1.WorkEditionResponseSchema.parse(data);
    }
    async getEdition(params) {
        let id;
        let isbn;
        if (typeof params === "string") {
            id = params;
            console.warn("Deprecation Warning: Calling getEdition with a string id is deprecated. Please use an object with either 'id' or 'isbn' property.");
        }
        else {
            ({ id, isbn } = params);
        }
        if ((!id && !isbn) || (id && isbn)) {
            throw new Error("Either id or isbn must be provided");
        }
        const data = await this.request(`${isbn ? `isbn:${isbn}` : `books/${id}`}.json`);
        return edition_1.EditionSchema.parse(data);
    }
    async getAuthor(id) {
        const data = await this.request(`/authors/${id}.json`);
        return author_1.AuthorSchema.parse(data);
    }
    async getAuthorWorks(id, { limit, offset } = {}) {
        const params = new URLSearchParams();
        if (limit !== undefined)
            params.set("limit", limit.toString());
        if (offset !== undefined)
            params.set("offset", offset.toString());
        const query = params.toString();
        const url = `/authors/${id}/works.json${query ? `?${query}` : ""}`;
        const data = await this.request(url);
        return author_1.AuthorWorksResponseSchema.parse(data);
    }
    async search(params) {
        const data = await this.request(`/search.json?${new URLSearchParams(params)}`);
        return search_1.SearchResponseSchema.parse(data);
    }
    async searchAuthors(params) {
        const data = await this.request(`/search/authors.json?${new URLSearchParams(params)}`);
        return search_1.SearchAuthorResponseSchema.parse(data);
    }
}
exports.OpenLibraryClient = OpenLibraryClient;
