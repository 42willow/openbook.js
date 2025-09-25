import { z } from "zod";
export declare const SearchRequestSchema: z.ZodObject<{
    q: z.ZodString;
    fields: z.ZodOptional<z.ZodString>;
    sort: z.ZodOptional<z.ZodString>;
    lang: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    offset: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    page: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const SearchResponseDocumentSchema: z.ZodObject<{
    cover_i: z.ZodOptional<z.ZodNumber>;
    has_fulltext: z.ZodOptional<z.ZodBoolean>;
    edition_count: z.ZodOptional<z.ZodNumber>;
    title: z.ZodOptional<z.ZodString>;
    author_name: z.ZodOptional<z.ZodArray<z.ZodString>>;
    first_publish_year: z.ZodOptional<z.ZodNumber>;
    key: z.ZodOptional<z.ZodString>;
    ia: z.ZodOptional<z.ZodArray<z.ZodString>>;
    author_key: z.ZodOptional<z.ZodArray<z.ZodString>>;
    public_scan_b: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const SearchResponseSchema: z.ZodObject<{
    start: z.ZodNumber;
    num_found: z.ZodNumber;
    docs: z.ZodArray<z.ZodObject<{
        cover_i: z.ZodOptional<z.ZodNumber>;
        has_fulltext: z.ZodOptional<z.ZodBoolean>;
        edition_count: z.ZodOptional<z.ZodNumber>;
        title: z.ZodOptional<z.ZodString>;
        author_name: z.ZodOptional<z.ZodArray<z.ZodString>>;
        first_publish_year: z.ZodOptional<z.ZodNumber>;
        key: z.ZodOptional<z.ZodString>;
        ia: z.ZodOptional<z.ZodArray<z.ZodString>>;
        author_key: z.ZodOptional<z.ZodArray<z.ZodString>>;
        public_scan_b: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SearchResponse = z.infer<typeof SearchResponseSchema>;
export type SearchRequest = z.infer<typeof SearchRequestSchema>;
export type SearchResponseDocument = z.infer<typeof SearchResponseDocumentSchema>;
