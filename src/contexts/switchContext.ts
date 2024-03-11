import { createContext } from 'react';

type SwitchContextType = {
  isSwitchOn: boolean;
  toggleSwitch: (value: boolean) => void;
};

export const SwitchContext = createContext<SwitchContextType>({} as SwitchContextType);
