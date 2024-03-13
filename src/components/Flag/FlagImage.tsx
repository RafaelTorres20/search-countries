import { Styles } from './styles';

export const FlagImage = ({
  field,
  name,
  src,
}: {
  field?: string;
  name?: string;
  src?: string;
}) => {
  return (
    <Styles.Line>
      <Styles.Image $src={src} />
      <Styles.Cell>
        <Styles.Cell>{field}</Styles.Cell>
        <Styles.Cell>{name}</Styles.Cell>
      </Styles.Cell>
    </Styles.Line>
  );
};
