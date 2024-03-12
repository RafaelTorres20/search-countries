import { ReactNode } from 'react';
import { Styles } from './styles';

export const TableList = ({ children }: { children: ReactNode }) => {
  return <Styles.List>{children}</Styles.List>;
};
