import { useMutation, useQueryClient } from "@tanstack/react-query";
import { itemQueryKey } from "../get-item-use-case/get-item-use-case";
import { itemsQueryKey } from "../get-items-use-case/get-items-use-case";
import { toast } from "sonner";
import { postItemService } from "@/src/services/item-services/post-item-service/post-item-service";
import { PostItemFields } from "@/src/services/item-services/post-item-service/schema";

export const useMutateItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (item: PostItemFields) => postItemService(item),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [itemQueryKey] });
      queryClient.invalidateQueries({ queryKey: [itemsQueryKey] });
      toast.success("Item created");
    },
    onError: (error) => {
      console.log("Error useMutateItem :", error);
      toast.error("Error while creating item");
    },
  });
};
