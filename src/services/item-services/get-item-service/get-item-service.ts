import { toast } from "sonner";
import { request } from "../../request";
import { itemSchema } from "./schema";

export const getItemService = async (id: string) => {
  try {
    const response = await request({
      url: `/items/${id}`,
      method: "GET",
    });

    const parsedResponse = itemSchema.safeParse(response.config?.data);

    if (!parsedResponse.success) {
      throw new Error(
        `Invalid response data getItemService: ${parsedResponse.error}`
      );
    }
    return parsedResponse.data;
  } catch (error) {
    console.log("Error getItemService :", error);
    toast.error("Error while fetching item");
  }
};
