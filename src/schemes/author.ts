import { z } from "zod";
import { WorkSchema } from "./work";

export const AuthorSchema = z.object({
  name: z.string().optional(),
  bio: z
    .union([
      z.string(),
      z.object({
        type: z.string(),
        value: z.string(),
      }),
    ])
    .optional(),
  source_records: z.array(z.string()).optional(),
  birth_date: z.string().optional(),
  death_date: z.string().optional(),
  photos: z.array(z.number()).optional(),
  personal_name: z.string().optional(),
  alternate_names: z.array(z.string()).optional(),
});

export const AuthorWorkEntrySchema = WorkSchema;

export const AuthorWorksResponseSchema = z.object({
  entries: z.array(AuthorWorkEntrySchema),
  size: z.number().optional(),
  links: z.record(z.string(), z.string()).optional(),
});

export type Author = z.infer<typeof AuthorSchema>;
export type AuthorWorkEntry = z.infer<typeof AuthorWorkEntrySchema>;
export type AuthorWorksResponse = z.infer<typeof AuthorWorksResponseSchema>;