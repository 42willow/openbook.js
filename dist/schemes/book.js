"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
const zod_1 = require("zod");
exports.BookSchema = zod_1.z.object({
    authors: zod_1.z.array(zod_1.z.object({
        key: zod_1.z.string(),
    })).transform((authors) => authors.map((author) => author.key)),
    identifiers: zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.string())),
    local_id: zod_1.z.array(zod_1.z.string()),
    publish_date: zod_1.z.string(),
    publishers: zod_1.z.array(zod_1.z.string()),
    source_records: zod_1.z.array(zod_1.z.string()),
    title: zod_1.z.string(),
    full_title: zod_1.z.string(),
    works: zod_1.z.array(zod_1.z.object({
        key: zod_1.z.string(),
    })).transform((works) => works.map((work) => work.key)),
    latest_revision: zod_1.z.number(),
    revision: zod_1.z.number(),
    created: zod_1.z.object({
        type: zod_1.z.string(),
        value: zod_1.z.string(),
    }).transform((created) => created.value),
    last_modified: zod_1.z.object({
        type: zod_1.z.string(),
        value: zod_1.z.string(),
    }).transform((lastModified) => lastModified.value),
});
