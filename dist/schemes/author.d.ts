import { z } from "zod";
export declare const AuthorSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    source_records: z.ZodOptional<z.ZodArray<z.ZodString>>;
    birth_date: z.ZodOptional<z.ZodString>;
    death_date: z.ZodOptional<z.ZodString>;
    photos: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    personal_name: z.ZodOptional<z.ZodString>;
    alternate_names: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Author = z.infer<typeof AuthorSchema>;
