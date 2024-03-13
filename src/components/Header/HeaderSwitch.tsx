import { Styles } from './styles';
import { FormatListBulleted, Public } from '@mui/icons-material';
import { useSwitch } from '../../hooks/useSwitch';
import { useSearch } from '../../hooks/useSearch';

export const HeaderSwitch = () => {
  const { toggleSwitch, isSwitchOn } = useSwitch();
  const { setCountry } = useSearch();
  return (
    <Styles.Switch>
      <Styles.SwitchButton
        onClick={() => {
          toggleSwitch(true);
          setCountry(undefined);
        }}
        $selected={isSwitchOn}
        $leftButton={1}
      >
        <FormatListBulleted />
      </Styles.SwitchButton>
      <Styles.SwitchButton
        $leftButton={2}
        $selected={!isSwitchOn}
        onClick={() => toggleSwitch(false)}
      >
        <Public />
      </Styles.SwitchButton>
    </Styles.Switch>
  );
};
