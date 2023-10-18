import { useQuery } from '@tanstack/react-query';

import { getStocks } from '../services/getStocks';

export const useGetTickerDetail = (ticker: string) => {
  return useQuery({
    queryKey: ['tickerDetail', ticker],
    queryFn: () => getStocks.getTickerDetail(ticker),
    enabled: ticker !== '',
    gcTime: 0,
  });
};
