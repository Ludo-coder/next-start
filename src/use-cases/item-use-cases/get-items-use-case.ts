import { gcTime, staleTime } from "@/src/constants/query-cache-time";
import { getItemsService } from "@/src/services/item-services/get-items-service/get-items-service";
import { useQuery } from "@tanstack/react-query";

export const itemsQueryKey = "items";

export const useItems = () => {
  return useQuery({
    queryKey: [itemsQueryKey],
    queryFn: () => getItemsService(),
    gcTime: gcTime.GC_TIME_ITEMS,
    staleTime: staleTime.STALE_TIME_ITEMS,
  });
};
