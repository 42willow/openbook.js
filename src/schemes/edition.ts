import { z } from "zod";

export const EditionSchema = z.object({
  works: z
    .array(
      z.object({
        key: z.string(),
      })
    )
    .optional(),

  title: z.string().optional(),
  subtitle: z.string().optional(),

  publishers: z.array(z.string()).optional(),
  publish_date: z.string().optional(),

  key: z.string().optional(),
  type: z
    .object({
      key: z.string(),
    })
    .optional(),

  identifiers: z.record(z.string(), z.array(z.string())).optional(),
  classifications: z.record(z.string(), z.array(z.string())).optional(),

  covers: z.array(z.number()).optional(),
  isbn_13: z.array(z.string()).optional(),

  languages: z
    .array(
      z.object({
        key: z.string(),
      })
    )
    .optional(),

  number_of_pages: z.number().optional(),
  copyright_date: z.string().optional(),
  physical_format: z.string().optional(),

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

export type Edition = z.infer<typeof EditionSchema>;
