import { z } from "zod";
export declare const WorkSchema: z.ZodObject<{
    key: z.ZodString;
    title: z.ZodString;
    covers: z.ZodArray<z.ZodNumber>;
    authors: z.ZodPipe<z.ZodArray<z.ZodObject<{
        author: z.ZodObject<{
            key: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>, z.ZodTransform<string[], {
        author: {
            key: string;
        };
    }[]>>;
    first_publish_date: z.ZodString;
    first_sentence: z.ZodPipe<z.ZodObject<{
        value: z.ZodString;
    }, z.core.$strip>, z.ZodTransform<string, {
        value: string;
    }>>;
    excerpts: z.ZodPipe<z.ZodArray<z.ZodObject<{
        excerpt: z.ZodString;
    }, z.core.$strip>>, z.ZodTransform<string[], {
        excerpt: string;
    }[]>>;
    description: z.ZodString;
    subject_places: z.ZodArray<z.ZodString>;
    subject_times: z.ZodArray<z.ZodString>;
    subject_people: z.ZodArray<z.ZodString>;
    subjects: z.ZodArray<z.ZodString>;
    latest_revision: z.ZodNumber;
    revision: z.ZodNumber;
    identifiers: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Work = z.infer<typeof WorkSchema>;
