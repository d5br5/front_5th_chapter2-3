import { useState } from "react"
import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from "@tanstack/react-query"

export const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { refetchOnWindowFocus: false, staleTime: 10 * 60_000 },
        },
      }),
  )

  return <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>
}
