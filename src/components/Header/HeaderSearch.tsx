import { useEffect, useRef } from 'react';import { useSearch } from '../../hooks/useSearch';
import { Styles } from './styles';
import { Search } from '@mui/icons-material';
import { useSwitch } from '../../hooks/useSwitch';

export const HeaderSearch = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { setValueSearched, valueSearched, saveSearch, setCountry } = useSearch();
  const { toggleSwitch } = useSwitch();

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <Styles.Search>
      <Styles.SearchInput
        ref={ref}
        onFocus={() => {
          setCountry(undefined);
          toggleSwitch(true);
        }}
        onBlur={() => {
          toggleSwitch(true);
          setValueSearched(ref.current?.value as string);
        }}
        defaultValue={valueSearched}
        placeholder="Search country"
      ></Styles.SearchInput>
      <Styles.SearchButton
        onClick={() => {
          toggleSwitch(true);
          saveSearch(ref.current?.value as string);
        }}
      >
        <Search />
      </Styles.SearchButton>
    </Styles.Search>
  );
};
