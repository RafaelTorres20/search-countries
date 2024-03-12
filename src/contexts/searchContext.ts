import { createContext } from 'react';
import { Country } from '../models/country';

type SearchContextType = {
  valueSearched: string;
  setValueSearched: (value: string) => void;
  countries: Country[];
  isLoading: boolean;
  error: Error | null;
};

export const SearchContext = createContext<SearchContextType>({} as SearchContextType);
