import { z } from "zod";

export const postItemSchema = z.object({
  name: z
    .string()
    .min(6, { message: "Name must be at least 6 characters long" })
    .max(12, { message: "Name must be at most 12 characters long" })
    .nonempty({ message: "Name cannot be empty" }),
  description: z.string().nonempty({ message: "Description cannot be empty" }),
});

export type PostItemFields = z.infer<typeof postItemSchema>;
