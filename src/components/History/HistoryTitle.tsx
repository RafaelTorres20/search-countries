import { ReactNode } from 'react';
import { Styles } from './styles';

export const HistoryTitle = ({ children }: { children: ReactNode }) => {
  return <Styles.Title>{children}</Styles.Title>;
};
