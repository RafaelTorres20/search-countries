import { useContext } from 'react';
import { SwitchContext } from '../contexts/switchContext';

export const useSwitch = () => {
  return useContext(SwitchContext);
};
