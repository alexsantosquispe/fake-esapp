import { QueryClient } from '@tanstack/react-query';

const MILLISECONDS_IN_SECOND = 1000;
const STALE_TIME_SECONDS = 60;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: MILLISECONDS_IN_SECOND * STALE_TIME_SECONDS,
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false
    }
  }
});

export default queryClient;
