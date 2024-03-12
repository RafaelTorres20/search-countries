import { ReactNode, useState } from 'react';
import { SearchContext } from '../contexts/searchContext';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Country } from '../models/country';

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  let countries: Country[] = [];
  const [valueSearched, setValue] = useState<string>('');
  const setValueSearched = (value: string) => {
    setValue(value);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['countries', valueSearched],
    queryFn: () =>
      axios.get<Country[]>(
        valueSearched === ''
          ? 'https://restcountries.com/v3.1/all'
          : `https://restcountries.com/v3.1/name/${valueSearched}`
      ),
    retry: 0,
  });

  if (error) {
    countries = [];
  }
  countries = data?.data as Country[];
  return (
    <SearchContext.Provider
      value={{ valueSearched, setValueSearched, isLoading, countries, error }}
    >
      {children}
    </SearchContext.Provider>
  );
};
