import { createContext } from 'react';
import { Country } from '../models/country';

type SearchContextType = {
  valueSearched: string;
  setValueSearched: (value: string) => void;
  saveSearch: (value: string) => void;
  setSearchs: (value: any[]) => void;
  searchs: any[];
  countries: Country[];
  isLoading: boolean;
  error: Error | null;
  country: Country | undefined;
  setCountry: (value: Country | undefined) => void;
};

export const SearchContext = createContext<SearchContextType>({} as SearchContextType);
