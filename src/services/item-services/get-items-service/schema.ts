import { z } from "zod";
import { itemSchema } from "../get-item-service/schema";

export const itemsSchema = z.array(itemSchema);
export type Items = z.infer<typeof itemSchema>[];
