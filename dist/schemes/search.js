"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchAuthorResponseSchema = exports.SearchAuthorResponseDocumentSchema = exports.SearchResponseSchema = exports.SearchResponseDocumentSchema = exports.SearchRequestSchema = void 0;
const zod_1 = require("zod");
exports.SearchRequestSchema = zod_1.z.object({
    q: zod_1.z.string(),
    fields: zod_1.z.string().optional(),
    sort: zod_1.z.string().optional(),
    lang: zod_1.z.string().optional(),
    language: zod_1.z.string().optional(),
    offset: zod_1.z.number().optional(),
    limit: zod_1.z.number().optional(),
    page: zod_1.z.number().optional(),
});
exports.SearchResponseDocumentSchema = zod_1.z.object({
    cover_i: zod_1.z.number().optional(),
    has_fulltext: zod_1.z.boolean().optional(),
    edition_count: zod_1.z.number().optional(),
    title: zod_1.z.string(),
    author_name: zod_1.z.array(zod_1.z.string()).optional(),
    first_publish_year: zod_1.z.number().optional(),
    key: zod_1.z.string(),
    ia: zod_1.z.array(zod_1.z.string()).optional(),
    author_key: zod_1.z.array(zod_1.z.string()).optional(),
    public_scan_b: zod_1.z.boolean().optional(),
});
exports.SearchResponseSchema = zod_1.z.object({
    start: zod_1.z.number(),
    num_found: zod_1.z.number(),
    docs: zod_1.z.array(exports.SearchResponseDocumentSchema),
});
exports.SearchAuthorResponseDocumentSchema = zod_1.z.object({
    alternate_names: zod_1.z.array(zod_1.z.string()).optional(),
    birth_date: zod_1.z.string().optional(),
    death_date: zod_1.z.string().optional(),
    key: zod_1.z.string(),
    name: zod_1.z.string().optional(),
    top_work: zod_1.z.string().optional(),
    work_count: zod_1.z.number().optional(),
});
exports.SearchAuthorResponseSchema = zod_1.z.object({
    start: zod_1.z.number(),
    numFound: zod_1.z.number(),
    docs: zod_1.z.array(exports.SearchAuthorResponseDocumentSchema),
});
