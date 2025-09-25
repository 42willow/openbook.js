import { z } from "zod";
export declare const BookSchema: z.ZodObject<{
    authors: z.ZodPipe<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
    }, z.core.$strip>>, z.ZodTransform<string[], {
        key: string;
    }[]>>;
    identifiers: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>;
    local_id: z.ZodArray<z.ZodString>;
    publish_date: z.ZodString;
    publishers: z.ZodArray<z.ZodString>;
    source_records: z.ZodArray<z.ZodString>;
    title: z.ZodString;
    full_title: z.ZodString;
    works: z.ZodPipe<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
    }, z.core.$strip>>, z.ZodTransform<string[], {
        key: string;
    }[]>>;
    latest_revision: z.ZodNumber;
    revision: z.ZodNumber;
    created: z.ZodPipe<z.ZodObject<{
        type: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodTransform<string, {
        type: string;
        value: string;
    }>>;
    last_modified: z.ZodPipe<z.ZodObject<{
        type: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodTransform<string, {
        type: string;
        value: string;
    }>>;
}, z.core.$strip>;
export type Book = z.infer<typeof BookSchema>;
