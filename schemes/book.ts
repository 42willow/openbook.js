import { z } from "zod";

export const BookSchema = z.object({
  authors: z.array(
    z.object({
      key: z.string(),
    })
  ).transform((authors) => authors.map((author) => author.key)),
  identifiers: z.record(z.string(), z.array(z.string())),
  local_id: z.array(z.string()),
  publish_date: z.string(),
  publishers: z.array(z.string()),
  source_records: z.array(z.string()),
  title: z.string(),
  full_title: z.string(),
  works: z.array(
    z.object({
      key: z.string(),
    })
  ).transform((works) => works.map((work) => work.key)),
  latest_revision: z.number(),
  revision: z.number(),
  created: z.object({
    type: z.string(),
    value: z.string(),
  }).transform((created) => created.value),
  last_modified: z.object({
    type: z.string(),
    value: z.string(),
  }).transform((lastModified) => lastModified.value),
});

export type Book = z.infer<typeof BookSchema>;