import axios from 'axios';

const baseUrl = 'https://api.polygon.io';

export const httpClient = axios.create({ baseURL: baseUrl });
axios.defaults.headers.common.Authorization =
  'Bearer k2yBIxo18jH4UVJYKIAMETcJgGf5Ah8w';
httpClient.defaults.headers.common.Authorization =
  'Bearer k2yBIxo18jH4UVJYKIAMETcJgGf5Ah8w';
