import { useEffect, useRef } from 'react';import { useSearch } from '../../hooks/useSearch';
import { Styles } from './styles';

export const HeaderSearch = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { setValueSearched, valueSearched, saveSearch } = useSearch();

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <Styles.Search>
      <Styles.SearchInput
        ref={ref}
        onBlur={() => {
          setValueSearched(ref.current?.value as string);
        }}
        defaultValue={valueSearched}
        placeholder="Search country"
      ></Styles.SearchInput>
      <Styles.SearchButton onClick={() => saveSearch(ref.current?.value as string)}>
        Search
      </Styles.SearchButton>
    </Styles.Search>
  );
};
