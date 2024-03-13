import { ReactNode } from 'react';
import { Styles } from './styles';

export const FlagCell = ({ children }: { children: ReactNode }) => {
  return <Styles.Cell>{children}</Styles.Cell>;
};
