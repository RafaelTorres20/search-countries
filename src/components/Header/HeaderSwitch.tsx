import { useState } from 'react';
import { Styles } from './styles';

export const HeaderSwitch = () => {
  const [selected, setSelected] = useState(false);
  return (
    <Styles.Switch>
      <Styles.SwitchButton
        onClick={() => {
          setSelected((prevState) => {
            return !prevState;
          });
        }}
        selected={selected}
        left
      >
        Light
      </Styles.SwitchButton>
      <Styles.SwitchButton
        selected={!selected}
        onClick={() => {
          setSelected((prevState) => {
            return !prevState;
          });
        }}
      >
        Dark
      </Styles.SwitchButton>
    </Styles.Switch>
  );
};
