"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditionSchema = void 0;
const zod_1 = require("zod");
exports.EditionSchema = zod_1.z.object({
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
