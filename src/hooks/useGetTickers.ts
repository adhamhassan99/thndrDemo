import { useQuery } from '@tanstack/react-query';

import { getStocks } from '../services/getStocks';

export const useGetTickers = (nextPageUrl: string = '') => {
  return useQuery({
    queryKey: ['tickers', `ticker${nextPageUrl}`],
    queryFn: () => getStocks.getAllTickers(nextPageUrl),
  });
};
