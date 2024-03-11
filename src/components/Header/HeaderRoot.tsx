import { ReactNode } from 'react';
import { Styles } from './styles';
export const HeaderRoot = ({ children }: { children: ReactNode }) => {
  return <Styles.Root>{children}</Styles.Root>;
};
