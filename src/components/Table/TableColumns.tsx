import { ReactNode } from 'react';
import { Styles } from './styles';

export const TableColumns = ({ children }: { children: ReactNode }) => {
  return <Styles.Columns>{children}</Styles.Columns>;
};
