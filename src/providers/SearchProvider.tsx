import { ReactNode, useState } from 'react';
import { SearchContext } from '../contexts/searchContext';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Country } from '../models/country';

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  let countries: Country[] = [];
  const [valueSearched, setValue] = useState<string>('');
  const [country, setCountry] = useState<Country | undefined>(undefined);
  const [searchs, setSearchs] = useState<any[]>(
    localStorage.getItem('@search')
      ? JSON.parse(localStorage.getItem('@search') as string)
      : []
  );
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

  const saveSearch = (value: string) => {
    if (value === '') return;
    setValueSearched(value as string);
    const search = {
      value: value,
      date: new Date().toISOString(),
      request: `https://restcountries.com/v3.1/name/${value}`,
    };

    const searchs = localStorage.getItem('@search');
    if (searchs === null) {
      localStorage.setItem('@search', JSON.stringify([search]));
      setSearchs([search]);
      return;
    }
    if (searchs) {
      const s = JSON.parse(searchs);
      localStorage.setItem('@search', JSON.stringify([search, ...s]));
      setSearchs([search, ...s]);
      return;
    }
  };
  return (
    <SearchContext.Provider
      value={{
        valueSearched,
        isLoading,
        countries,
        error,
        searchs,
        country,
        saveSearch,
        setSearchs,
        setCountry,
        setValueSearched,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
