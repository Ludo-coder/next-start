const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;

export const staleTime = {
  STALE_TIME_ITEM: 1 * HOUR,
  STALE_TIME_ITEMS: 1 * HOUR,
};

export const gcTime = {
  GC_TIME_ITEM: 4 * WEEK,
  GC_TIME_ITEMS: 4 * WEEK,
};
