import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "./Tooltip";
import { SonnerToaster } from "./SonnerToaster";
import { ScrollToHashElement } from "./ScrollToHashElement";
import { LanguageProvider } from "../helpers/useLanguage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute “fresh” window
    },
  },
});

export const GlobalContextProviders = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <ScrollToHashElement />
        <TooltipProvider>
          {children}
          <SonnerToaster />
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
};
