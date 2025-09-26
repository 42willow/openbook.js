import { z } from "zod";
export declare const EditionSchema: z.ZodObject<{
    works: z.ZodOptional<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
    }, z.core.$strip>>>;
    title: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    publishers: z.ZodOptional<z.ZodArray<z.ZodString>>;
    publish_date: z.ZodOptional<z.ZodString>;
    key: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodObject<{
        key: z.ZodString;
    }, z.core.$strip>>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
    classifications: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
    covers: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    isbn_13: z.ZodOptional<z.ZodArray<z.ZodString>>;
    languages: z.ZodOptional<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
    }, z.core.$strip>>>;
    number_of_pages: z.ZodOptional<z.ZodNumber>;
    copyright_date: z.ZodOptional<z.ZodString>;
    physical_format: z.ZodOptional<z.ZodString>;
    latest_revision: z.ZodOptional<z.ZodNumber>;
    revision: z.ZodOptional<z.ZodNumber>;
    created: z.ZodOptional<z.ZodObject<{
        type: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>;
    last_modified: z.ZodOptional<z.ZodObject<{
        type: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Edition = z.infer<typeof EditionSchema>;
