import { ReactNode } from 'react';
import { Styles } from './styles';

export const HistoryHead = ({ children }: { children: ReactNode }) => {
  return <Styles.Head>{children}</Styles.Head>;
};
