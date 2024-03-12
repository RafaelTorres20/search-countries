import { ReactNode } from 'react';
import { Styles } from './styles';

export const HistoryButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return <Styles.Button onClick={onClick}>{children}</Styles.Button>;
};
