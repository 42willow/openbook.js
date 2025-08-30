import { z } from "zod";

export const WorkSchema = z.object({
  key: z.string(),
  title: z.string(),
  covers: z.array(z.number()),
  authors: z
    .array(
      z.object({
        author: z.object({
          key: z.string(),
        }),
      })
    )
    .transform((authors) => authors.map((author) => author.author.key)),
  first_publish_date: z.string(),
  first_sentence: z
    .object({
      value: z.string(),
    })
    .transform((firstSentence) => firstSentence.value),
  excerpts: z
    .array(
      z.object({
        excerpt: z.string(),
      })
    )
    .transform((excerpts) => excerpts?.map((e) => e.excerpt) ?? []),
  description: z.string(),
  subject_places: z.array(z.string()),
  subject_times: z.array(z.string()),
  subject_people: z.array(z.string()),
  subjects: z.array(z.string()),
  latest_revision: z.number(),
  revision: z.number(),
  identifiers: z.record(z.string(), z.array(z.string())),
});

export type Work = z.infer<typeof WorkSchema>;
