import axios, { AxiosResponse } from 'axios';

import { httpClient } from './httpclient';
import { IGetAllTickers } from '../types/getAllTickers';
import { IGetTickerDetails } from '../types/getTickerDetails';

export const getStocks = {
  getAllTickers: async (
    nextPageUrl: string,
  ): Promise<AxiosResponse<IGetAllTickers>['data']> =>
    nextPageUrl !== ''
      ? await axios
          .get(nextPageUrl)
          .then(data => data.data)
          .catch(e => {
            throw new Error(e);
          })
      : await httpClient
          .get('/v3/reference/tickers')
          .then(data => data.data)
          .catch(e => {
            throw new Error(e);
          }),

  getTickerDetail: async (
    ticker: string,
  ): Promise<AxiosResponse<IGetTickerDetails>['data']> =>
    await httpClient
      .get(`/v3/reference/tickers/${ticker}`)
      .then(data => data.data)
      .catch(() => {
        throw new Error('network issue');
      }),
};
