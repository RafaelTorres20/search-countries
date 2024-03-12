import { ReactNode } from 'react';
import { Styles } from './styles';

export const HistoryRoot = ({ children }: { children: ReactNode }) => {
  return <Styles.Root>{children}</Styles.Root>;
};
