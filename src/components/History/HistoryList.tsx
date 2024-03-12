import { ReactNode } from 'react';
import { Styles } from './styles';

export const HistoryList = ({ children }: { children: ReactNode }) => {
  return <Styles.List>{children}</Styles.List>;
};
