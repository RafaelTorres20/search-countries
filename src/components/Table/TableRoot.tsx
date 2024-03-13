import { ReactNode } from 'react';import { Styles } from './styles';
import { useSwitch } from '../../hooks/useSwitch';

export const TableRoot = ({ children }: { children: ReactNode }) => {
  const { isSwitchOn } = useSwitch();
  return <Styles.Root $switch={isSwitchOn}>{children}</Styles.Root>;
};
