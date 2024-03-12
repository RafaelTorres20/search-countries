import { useContext } from 'react';
import { SearchContext } from '../contexts/searchContext';

export const useSearch = () => {
  return useContext(SearchContext);
};
