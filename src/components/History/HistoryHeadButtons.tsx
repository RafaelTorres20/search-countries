import { ReactNode } from 'react';
import { Styles } from './styles';

export const HistoryHeadButtons = ({ children }: { children: ReactNode }) => {
  return <Styles.HeadButtons>{children}</Styles.HeadButtons>;
};
