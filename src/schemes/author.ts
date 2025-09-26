import { z } from "zod";

export const AuthorSchema = z.object({
  name: z.string().optional(),
  bio: z
    .object({
      type: z.string(),
      value: z.string(),
    })
    .optional(),
  source_records: z.array(z.string()).optional(),
  birth_date: z.string().optional(),
  death_date: z.string().optional(),
  photos: z.array(z.number()).optional(),
  personal_name: z.string().optional(),
  alternate_names: z.array(z.string()).optional(),
});

export const AuthorWorkEntrySchema = z.object({
  title: z.string().optional(),
  key: z.string().optional(),
  authors: z
    .array(
      z.object({
        author: z.object({
          key: z.string(),
        }),
        type: z.object({
          key: z.string(),
        }),
      })
    )
    .optional(),
  type: z
    .object({
      key: z.string(),
    })
    .optional(),
  covers: z.array(z.number()).optional(),
  subjects: z.array(z.string()).optional(),
  subject_places: z.array(z.string()).optional(),
  subject_people: z.array(z.string()).optional(),
  subject_times: z.array(z.string()).optional(),
  description: z
    .union([
      z.string(),
      z.object({
        type: z.string(),
        value: z.string(),
      }),
    ])
    .optional(),
  latest_revision: z.number().optional(),
  revision: z.number().optional(),
  created: z
    .object({
      type: z.string(),
      value: z.string(),
    })
    .optional(),
  last_modified: z
    .object({
      type: z.string(),
      value: z.string(),
    })
    .optional(),
});

export const AuthorWorksResponseSchema = z.object({
  entries: z.array(AuthorWorkEntrySchema),
  size: z.number().optional(),
  links: z.record(z.string(), z.string()).optional(),
});

export type Author = z.infer<typeof AuthorSchema>;
export type AuthorWorkEntry = z.infer<typeof AuthorWorkEntrySchema>;
export type AuthorWorksResponse = z.infer<typeof AuthorWorksResponseSchema>;
