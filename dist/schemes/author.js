"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorWorksResponseSchema = exports.AuthorWorkEntrySchema = exports.AuthorSchema = void 0;
const zod_1 = require("zod");
exports.AuthorSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    bio: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.object({
            type: zod_1.z.string(),
            value: zod_1.z.string(),
        }),
    ])
        .optional(),
    source_records: zod_1.z.array(zod_1.z.string()).optional(),
    birth_date: zod_1.z.string().optional(),
    death_date: zod_1.z.string().optional(),
    photos: zod_1.z.array(zod_1.z.number()).optional(),
    personal_name: zod_1.z.string().optional(),
    alternate_names: zod_1.z.array(zod_1.z.string()).optional(),
});
exports.AuthorWorkEntrySchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    key: zod_1.z.string().optional(),
    authors: zod_1.z
        .array(zod_1.z.object({
        author: zod_1.z.object({
            key: zod_1.z.string(),
        }),
        type: zod_1.z.object({
            key: zod_1.z.string(),
        }),
    }))
        .optional(),
    type: zod_1.z
        .object({
        key: zod_1.z.string(),
    })
        .optional(),
    covers: zod_1.z.array(zod_1.z.number()).optional(),
    subjects: zod_1.z.array(zod_1.z.string()).optional(),
    subject_places: zod_1.z.array(zod_1.z.string()).optional(),
    subject_people: zod_1.z.array(zod_1.z.string()).optional(),
    subject_times: zod_1.z.array(zod_1.z.string()).optional(),
    description: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.object({
            type: zod_1.z.string(),
            value: zod_1.z.string(),
        }),
    ])
        .optional(),
    latest_revision: zod_1.z.number().optional(),
    revision: zod_1.z.number().optional(),
    created: zod_1.z
        .object({
        type: zod_1.z.string(),
        value: zod_1.z.string(),
    })
        .optional(),
    last_modified: zod_1.z
        .object({
        type: zod_1.z.string(),
        value: zod_1.z.string(),
    })
        .optional(),
});
exports.AuthorWorksResponseSchema = zod_1.z.object({
    entries: zod_1.z.array(exports.AuthorWorkEntrySchema),
    size: zod_1.z.number().optional(),
    links: zod_1.z.record(zod_1.z.string(), zod_1.z.string()).optional(),
});
