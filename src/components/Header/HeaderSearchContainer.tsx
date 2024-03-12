import { ReactNode } from 'react';
import { Styles } from './styles';

export const HeaderSearchContainer = ({ children }: { children: ReactNode }) => {
  return <Styles.SearchContainer>{children}</Styles.SearchContainer>;
};
