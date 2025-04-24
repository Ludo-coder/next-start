import { z } from "zod";

export const itemSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
});

export type Item = z.infer<typeof itemSchema>;
