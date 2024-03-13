import { ReactNode } from 'react';
import { Styles } from './styles';

interface TableLineProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TableLine = ({ children, ...rest }: TableLineProps) => {
  return <Styles.Line {...rest}>{children}</Styles.Line>;
};
