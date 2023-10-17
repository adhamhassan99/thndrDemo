import { AxiosResponse } from 'axios';

import { httpClient } from './httpclient';
import { IGetAllTickers } from '../types/getAllTickers';

export const getStocks = {
  getAllTickers: async (): Promise<AxiosResponse<IGetAllTickers>['data']> =>
    await httpClient
      .get('/v3/reference/tickers')
      .then(data => data.data)
      .catch(e => console.log(e)),

  getTickerDetail: async (ticker: string) =>
    await httpClient
      .get(`/v3/reference/tickers/${ticker}`)
      .then(data => data.data)
      .catch(e => console.error(e)),
};
