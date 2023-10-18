import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useGetNextPage = (nextPageUrl: string) => {
  return useMutation({
    mutationFn: async () =>
      await axios
        .get(nextPageUrl)
        .then(data => data.data)
        .catch(e => console.error(e)),
    mutationKey: ['nextPage', nextPageUrl],
  });
};
