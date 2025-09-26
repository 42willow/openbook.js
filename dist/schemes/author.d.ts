import { z } from "zod";
export declare const AuthorSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        type: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>]>>;
    source_records: z.ZodOptional<z.ZodArray<z.ZodString>>;
    birth_date: z.ZodOptional<z.ZodString>;
    death_date: z.ZodOptional<z.ZodString>;
    photos: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    personal_name: z.ZodOptional<z.ZodString>;
    alternate_names: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const AuthorWorkEntrySchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    key: z.ZodOptional<z.ZodString>;
    authors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        author: z.ZodObject<{
            key: z.ZodString;
        }, z.core.$strip>;
        type: z.ZodObject<{
            key: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>>;
    type: z.ZodOptional<z.ZodObject<{
        key: z.ZodString;
    }, z.core.$strip>>;
    covers: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    subjects: z.ZodOptional<z.ZodArray<z.ZodString>>;
    subject_places: z.ZodOptional<z.ZodArray<z.ZodString>>;
    subject_people: z.ZodOptional<z.ZodArray<z.ZodString>>;
    subject_times: z.ZodOptional<z.ZodArray<z.ZodString>>;
    description: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        type: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>]>>;
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
export declare const AuthorWorksResponseSchema: z.ZodObject<{
    entries: z.ZodArray<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        key: z.ZodOptional<z.ZodString>;
        authors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            author: z.ZodObject<{
                key: z.ZodString;
            }, z.core.$strip>;
            type: z.ZodObject<{
                key: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>>;
        type: z.ZodOptional<z.ZodObject<{
            key: z.ZodString;
        }, z.core.$strip>>;
        covers: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        subjects: z.ZodOptional<z.ZodArray<z.ZodString>>;
        subject_places: z.ZodOptional<z.ZodArray<z.ZodString>>;
        subject_people: z.ZodOptional<z.ZodArray<z.ZodString>>;
        subject_times: z.ZodOptional<z.ZodArray<z.ZodString>>;
        description: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            type: z.ZodString;
            value: z.ZodString;
        }, z.core.$strip>]>>;
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
export type Author = z.infer<typeof AuthorSchema>;
export type AuthorWorkEntry = z.infer<typeof AuthorWorkEntrySchema>;
export type AuthorWorksResponse = z.infer<typeof AuthorWorksResponseSchema>;
