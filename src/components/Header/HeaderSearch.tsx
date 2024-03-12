import { useEffect, useRef } from 'react';
import { useSearch } from '../../hooks/useSearch';
import { Styles } from './styles';

export const HeaderSearch = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { setValueSearched, valueSearched } = useSearch();
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
      <Styles.SearchButton
        onClick={() => {
          setValueSearched(ref.current?.value as string);
          const search = {
            value: ref.current?.value as string,
            date: new Date().toISOString(),
          };

          const searchs = localStorage.getItem('@search');
          if (searchs === null) {
            localStorage.setItem('@search', JSON.stringify([search]));
            return;
          }
          if (searchs) {
            const s = JSON.parse(searchs);
            localStorage.setItem('@search', JSON.stringify([...s, search]));
            return;
          }
        }}
      >
        Search
      </Styles.SearchButton>
    </Styles.Search>
  );
};
