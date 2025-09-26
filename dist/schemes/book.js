"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditionSchema = void 0;
const zod_1 = require("zod");
exports.EditionSchema = zod_1.z.object({
    key: zod_1.z.string().optional(),
    type: zod_1.z.object({
        key: zod_1.z.string(),
    }).optional(),
    revision: zod_1.z.number().optional(),
    latest_revision: zod_1.z.number().optional(),
    // Titles
    title: zod_1.z.string().optional(),
    full_title: zod_1.z.string().optional(),
    subtitle: zod_1.z.string().optional(),
    work_titles: zod_1.z.array(zod_1.z.string()).optional(),
    // Author + Works
    authors: zod_1.z.array(zod_1.z.object({
        key: zod_1.z.string(),
    })).optional(),
    works: zod_1.z.array(zod_1.z.object({
        key: zod_1.z.string(),
    })).optional(),
    // Publishing info
    publishers: zod_1.z.array(zod_1.z.string()).optional(),
    publish_places: zod_1.z.array(zod_1.z.string()).optional(),
    publish_date: zod_1.z.string().optional(),
    publish_country: zod_1.z.string().optional(),
    by_statement: zod_1.z.string().optional(),
    // Classification, identifiers, numbers
    identifiers: zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.string())).optional(),
    isbn_10: zod_1.z.array(zod_1.z.string()).optional(),
    isbn_13: zod_1.z.array(zod_1.z.string()).optional(),
    lc_classifications: zod_1.z.array(zod_1.z.string()).optional(),
    lccn: zod_1.z.array(zod_1.z.string()).optional(),
    oclc_numbers: zod_1.z.array(zod_1.z.string()).optional(),
    local_id: zod_1.z.array(zod_1.z.string()).optional(),
    // Misc
    series: zod_1.z.array(zod_1.z.string()).optional(),
    subjects: zod_1.z.array(zod_1.z.string()).optional(),
    number_of_pages: zod_1.z.number().optional(),
    pagination: zod_1.z.string().optional(),
    notes: zod_1.z.object({
        type: zod_1.z.string(),
        value: zod_1.z.string(),
    }).optional(),
    // Records and sources
    source_records: zod_1.z.array(zod_1.z.string()).optional(),
    // Dates
    created: zod_1.z.object({
        type: zod_1.z.string(),
        value: zod_1.z.string(),
    }).optional(),
    last_modified: zod_1.z.object({
        type: zod_1.z.string(),
        value: zod_1.z.string(),
    }).optional(),
    // Languages
    languages: zod_1.z.array(zod_1.z.object({
        key: zod_1.z.string(),
    })).optional(),
});
