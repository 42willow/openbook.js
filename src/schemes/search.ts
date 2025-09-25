import { z } from "zod";

export const SearchRequestSchema = z.object({
  q: z.string(),
  fields: z.string().optional(),
  sort: z.string().optional(),
  lang: z.string().optional(),
  language: z.string().optional(),
  offset: z.number().optional(),
  limit: z.number().optional(),
  page: z.number().optional(),
});

export const SearchResponseDocumentSchema = z.object({
  cover_i: z.number().optional(),
  has_fulltext: z.boolean().optional(),
  edition_count: z.number().optional(),
  title: z.string().optional(),
  author_name: z.array(z.string()).optional(),
  first_publish_year: z.number().optional(),
  key: z.string().optional(),
  ia: z.array(z.string()).optional(),
  author_key: z.array(z.string()).optional(),
  public_scan_b: z.boolean().optional(),
});

export const SearchResponseSchema = z.object({
  start: z.number(),
  num_found: z.number(),
  docs: z.array(SearchResponseDocumentSchema),
});

export type SearchResponse = z.infer<typeof SearchResponseSchema>;
export type SearchRequest = z.infer<typeof SearchRequestSchema>;
export type SearchResponseDocument = z.infer<typeof SearchResponseDocumentSchema>;
