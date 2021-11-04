import useSWR from 'swr'
import fetcher from '../utils/fetchers';

export const useBrands = () => {
  const { data, error } = useSWR('https://api-dev.sodagift.com/api/brands', fetcher);
  return { brands: data, error }
}

export default useBrands;