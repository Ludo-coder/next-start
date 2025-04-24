import { toast } from "sonner";
import { request } from "../../request";
import { itemsSchema } from "./schema";

export const getItemsService = async () => {
  try {
    const response = await request({
      url: `/items`,
      method: "GET",
    });

    const parsedResponse = itemsSchema.safeParse(response.config?.data);

    if (!parsedResponse.success) {
      throw new Error(
        `Invalid response data getItemsService: ${parsedResponse.error}`
      );
    }
    return parsedResponse.data;
  } catch (error) {
    console.log("Error getItemsService :", error);
    toast.error("Error while fetching items");
  }
};
