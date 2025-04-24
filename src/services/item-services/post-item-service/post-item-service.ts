import { request } from "../../request";
import { PostItemFields } from "./schema";

export const postItemService = async (item: PostItemFields) => {
  try {
    const response = await request({
      url: `/items`,
      method: "POST",
      values: item,
    });

    return response;
  } catch (error) {
    console.log("Error postItemService :", error);
  }
};
