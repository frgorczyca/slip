import { QueryClient } from 'react-query';

const DEFAULT_STALE_TIME = 2 * 60 * 1000; // 2 min

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: DEFAULT_STALE_TIME,
    },
  },
});
