import { z } from "zod";
export declare const WorkSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    subjects: z.ZodOptional<z.ZodArray<z.ZodString>>;
    key: z.ZodOptional<z.ZodString>;
    authors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        author: z.ZodObject<{
            key: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>>;
    covers: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    description: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodPipe<z.ZodObject<{
        type: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodTransform<string, {
        value: string;
        type?: string | undefined;
    }>>]>>;
    first_publish_date: z.ZodOptional<z.ZodString>;
    subject_places: z.ZodOptional<z.ZodArray<z.ZodString>>;
    subject_times: z.ZodOptional<z.ZodArray<z.ZodString>>;
    subject_people: z.ZodOptional<z.ZodArray<z.ZodString>>;
    excerpts: z.ZodOptional<z.ZodArray<z.ZodPipe<z.ZodObject<{
        excerpt: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            type: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, z.core.$strip>]>;
    }, z.core.$strip>, z.ZodTransform<string, {
        excerpt: string | {
            value: string;
            type?: string | undefined;
        };
    }>>>>;
    latest_revision: z.ZodOptional<z.ZodNumber>;
    revision: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const WorkEditionSchema: z.ZodObject<{
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
export declare const WorkEditionResponseSchema: z.ZodObject<{
    entries: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
    size: z.ZodOptional<z.ZodNumber>;
    links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, z.core.$strip>;
export type WorkEdition = z.infer<typeof WorkEditionSchema>;
export type Work = z.infer<typeof WorkSchema>;
export type WorkEditionResponse = z.infer<typeof WorkEditionResponseSchema>;
