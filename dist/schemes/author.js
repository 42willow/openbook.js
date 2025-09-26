"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorSchema = void 0;
const zod_1 = require("zod");
exports.AuthorSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    bio: zod_1.z.string().optional(),
    source_records: zod_1.z.array(zod_1.z.string()).optional(),
    birth_date: zod_1.z.string().optional(),
    death_date: zod_1.z.string().optional(),
    photos: zod_1.z.array(zod_1.z.number()).optional(),
    personal_name: zod_1.z.string().optional(),
    alternate_names: zod_1.z.array(zod_1.z.string()).optional(),
});
