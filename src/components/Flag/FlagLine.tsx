import { ReactNode } from 'react';
import { Styles } from './styles';

export const FlagLine = ({ children }: { children: ReactNode }) => {
  return <Styles.Line>{children}</Styles.Line>;
};
