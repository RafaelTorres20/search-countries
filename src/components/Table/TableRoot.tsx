import { ReactNode } from 'react';
import { Styles } from './styles';

export const TableRoot = ({ children }: { children: ReactNode }) => {
  return <Styles.Root>{children}</Styles.Root>;
};
