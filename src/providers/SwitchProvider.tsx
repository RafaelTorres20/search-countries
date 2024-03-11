import { ReactNode, useState } from 'react';
import { SwitchContext } from '../contexts/switchContext';

export const SwitchProvider = ({ children }: { children: ReactNode }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const toggleSwitch = (value: boolean) => {
    setIsSwitchOn(value);
  };
  return (
    <SwitchContext.Provider value={{ isSwitchOn, toggleSwitch }}>
      {children}
    </SwitchContext.Provider>
  );
};
