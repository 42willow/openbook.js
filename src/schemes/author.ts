import { z } from "zod";

export const AuthorSchema = z.object({
  name: z.string().optional(),
  bio: z.string().optional(),
  source_records: z.array(z.string()).optional(),
  birth_date: z.string().optional(),
  death_date: z.string().optional(),
  photos: z.array(z.number()).optional(),
  personal_name: z.string().optional(),
  alternate_names: z.array(z.string()).optional(),
});

export type Author = z.infer<typeof AuthorSchema>;
