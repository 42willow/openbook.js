"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorWorksResponseSchema = exports.AuthorWorkEntrySchema = exports.AuthorSchema = void 0;
const zod_1 = require("zod");
const work_1 = require("./work");
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
exports.AuthorWorkEntrySchema = work_1.WorkSchema;
exports.AuthorWorksResponseSchema = zod_1.z.object({
    entries: zod_1.z.array(exports.AuthorWorkEntrySchema),
    size: zod_1.z.number().optional(),
    links: zod_1.z.record(zod_1.z.string(), zod_1.z.string()).optional(),
});
