import { gcTime, staleTime } from "@/src/constants/query-cache-time";
import { getItemService } from "@/src/services/item-services/get-item-service/get-item-service";
import { useQuery } from "@tanstack/react-query";

export const itemQueryKey = "item";

export const useItem = (id: string) => {
  return useQuery({
    queryKey: [itemQueryKey, id],
    queryFn: () => getItemService(id),
    gcTime: gcTime.GC_TIME_ITEM,
    staleTime: staleTime.STALE_TIME_ITEM,
  });
};
