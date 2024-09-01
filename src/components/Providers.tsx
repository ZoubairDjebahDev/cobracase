"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const client = new QueryClient();

const Providers = ({ children }: ProvidersProps) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default Providers;
