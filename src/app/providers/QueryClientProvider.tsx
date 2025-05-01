import { useState } from "react"
import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from "@tanstack/react-query"

export const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient())

  return <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>
}
