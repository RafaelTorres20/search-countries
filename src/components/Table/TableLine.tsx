import { ReactNode } from 'react';
import { Styles } from './styles';

export const TableLine = ({ children }: { children: ReactNode }) => {
  return <Styles.Line>{children}</Styles.Line>;
};
