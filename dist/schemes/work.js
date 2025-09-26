"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkEditionResponseSchema = exports.WorkEditionSchema = exports.WorkSchema = void 0;
const zod_1 = require("zod");
exports.WorkSchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    subjects: zod_1.z.array(zod_1.z.string()).optional(),
    key: zod_1.z.string().optional(),
    authors: zod_1.z
        .array(zod_1.z.object({
        author: zod_1.z.object({
            key: zod_1.z.string(),
        }),
    }))
        .optional(),
    covers: zod_1.z.array(zod_1.z.number()).optional(),
    description: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.object({
            type: zod_1.z.string(),
            value: zod_1.z.string(),
        }),
    ])
        .optional(),
    subject_places: zod_1.z.array(zod_1.z.string()).optional(),
    subject_times: zod_1.z.array(zod_1.z.string()).optional(),
    subject_people: zod_1.z.array(zod_1.z.string()).optional(),
    excerpts: zod_1.z
        .array(zod_1.z.object({
        excerpt: zod_1.z.string(),
    }))
        .optional(),
    latest_revision: zod_1.z.number().optional(),
    revision: zod_1.z.number().optional(),
});
exports.WorkEditionSchema = zod_1.z.object({
    works: zod_1.z
        .array(zod_1.z.object({
        key: zod_1.z.string(),
    }))
        .optional(),
    title: zod_1.z.string().optional(),
    subtitle: zod_1.z.string().optional(),
    publishers: zod_1.z.array(zod_1.z.string()).optional(),
    publish_date: zod_1.z.string().optional(),
    key: zod_1.z.string().optional(),
    type: zod_1.z
        .object({
        key: zod_1.z.string(),
    })
        .optional(),
    identifiers: zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.string())).optional(),
    classifications: zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.string())).optional(),
    covers: zod_1.z.array(zod_1.z.number()).optional(),
    isbn_13: zod_1.z.array(zod_1.z.string()).optional(),
    languages: zod_1.z
        .array(zod_1.z.object({
        key: zod_1.z.string(),
    }))
        .optional(),
    number_of_pages: zod_1.z.number().optional(),
    copyright_date: zod_1.z.string().optional(),
    physical_format: zod_1.z.string().optional(),
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
exports.WorkEditionResponseSchema = zod_1.z.object({
    entries: zod_1.z.array(exports.WorkEditionSchema),
    size: zod_1.z.number().optional(),
    links: zod_1.z.record(zod_1.z.string(), zod_1.z.string()).optional(),
});
