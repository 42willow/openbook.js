import { z } from "zod";

const StringOrObjectSchema = z.union([
  z.string(),
  z.object({
    type: z.string().optional(),
    value: z.string(),
  }),
]);

export const WorkSchema = z.object({
  title: z.string().optional(),
  subjects: z.array(z.string()).optional(),
  key: z.string().optional(),
  authors: z
    .array(
      z.object({
        author: z.object({
          key: z.string(),
        }),
      })
    )
    .optional(),
  covers: z.array(z.number()).optional(),
  description: StringOrObjectSchema.optional(),
  first_publish_date: z.string().optional(),
  subject_places: z.array(z.string()).optional(),
  subject_times: z.array(z.string()).optional(),
  subject_people: z.array(z.string()).optional(),
  excerpts: z
    .array(
      z.object({
        excerpt: StringOrObjectSchema,
      })
    )
    .optional(),
  latest_revision: z.number().optional(),
  revision: z.number().optional(),
});

export const WorkEditionSchema = z.object({
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

export const WorkEditionResponseSchema = z.object({
  entries: z.array(WorkEditionSchema),
  size: z.number().optional(),
  links: z.record(z.string(), z.string()).optional(),
});

export type WorkEdition = z.infer<typeof WorkEditionSchema>;
export type Work = z.infer<typeof WorkSchema>;
export type WorkEditionResponse = z.infer<typeof WorkEditionResponseSchema>;

export function normalizeExcerpts(work: Work): string[] {
  if (!work.excerpts) return [];
  return work.excerpts.map((e) =>
    typeof e.excerpt === "string" ? e.excerpt : e.excerpt.value
  );
}

export function normalizeDescription(work: Work): string | undefined {
  if (!work.description) return undefined;
  return typeof work.description === "string"
    ? work.description
    : work.description.value;
}
