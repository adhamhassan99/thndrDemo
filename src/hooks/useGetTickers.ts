import { useQuery } from '@tanstack/react-query';

import { getStocks } from '../services/getStocks';

export const useGetTickers = () => {
  return useQuery({
    queryKey: ['tickers'],
    queryFn: getStocks.getAllTickers,
  });
};
