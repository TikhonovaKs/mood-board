import { useContext } from 'react';
import SearchProviderContext from './SearchProvider.context';

export const useSearch = () => {
  return useContext(SearchProviderContext);
};
