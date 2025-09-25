"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkSchema = void 0;
const zod_1 = require("zod");
exports.WorkSchema = zod_1.z.object({
    key: zod_1.z.string(),
    title: zod_1.z.string(),
    covers: zod_1.z.array(zod_1.z.number()),
    authors: zod_1.z
        .array(zod_1.z.object({
        author: zod_1.z.object({
            key: zod_1.z.string(),
        }),
    }))
        .transform((authors) => authors.map((author) => author.author.key)),
    first_publish_date: zod_1.z.string(),
    first_sentence: zod_1.z
        .object({
        value: zod_1.z.string(),
    })
        .transform((firstSentence) => firstSentence.value),
    excerpts: zod_1.z
        .array(zod_1.z.object({
        excerpt: zod_1.z.string(),
    }))
        .transform((excerpts) => excerpts?.map((e) => e.excerpt) ?? []),
    description: zod_1.z.string(),
    subject_places: zod_1.z.array(zod_1.z.string()),
    subject_times: zod_1.z.array(zod_1.z.string()),
    subject_people: zod_1.z.array(zod_1.z.string()),
    subjects: zod_1.z.array(zod_1.z.string()),
    latest_revision: zod_1.z.number(),
    revision: zod_1.z.number(),
    identifiers: zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.string())),
});
