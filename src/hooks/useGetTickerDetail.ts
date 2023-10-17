import { useMutation } from '@tanstack/react-query';

import { getStocks } from '../services/getStocks';

export const useGetTickerDetail = (ticker: string) => {
  return useMutation({
    mutationKey: ['tickerDetail', ticker],
    mutationFn: () => getStocks.getTickerDetail(ticker),
  });
};
