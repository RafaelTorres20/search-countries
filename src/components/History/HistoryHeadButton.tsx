import { ReactNode } from 'react';import { Styles } from './styles';

export const HistoryHeadButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return <Styles.HeadButton onClick={onClick}>{children}</Styles.HeadButton>;
};
