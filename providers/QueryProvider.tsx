"use client";

import type { ChildrenProps } from "@/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export const QueryProvider = ({ children }: ChildrenProps) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
