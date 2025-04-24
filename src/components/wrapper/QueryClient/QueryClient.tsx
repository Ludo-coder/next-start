"use client";
import {
  QueryClient as QueryClientClass,
  QueryClientProvider,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClientClass();

export default function QueryClient({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
