import { ReactNode } from 'react';
import { Styles } from './styles';

export const TableHeader = ({ children }: { children: ReactNode }) => {
  return <Styles.Header>{children}</Styles.Header>;
};
