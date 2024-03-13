import { ReactNode } from 'react';
import { Styles } from './styles';
import { useSearch } from '../../hooks/useSearch';

export const FlagRoot = ({ children }: { children: ReactNode }) => {
  const { country } = useSearch();
  return (
    <>
      <Styles.Root $country={country}>
        <Styles.Stick />
        {children}
      </Styles.Root>
    </>
  );
};
