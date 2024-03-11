import React from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';
import globe from '../../assets/globe.jpg';
import background from '../../assets/background.png';
import { useGlobe } from './useGlobe';

export const Globes = () => {
  const { globeEl, setLoading } = useGlobe();

  return (
    <Globe
      onGlobeReady={() => {
        setLoading(false);
      }}
      width={window.innerWidth}
      ref={globeEl as React.MutableRefObject<GlobeMethods | undefined>}
      showAtmosphere={true}
      atmosphereColor="white"
      atmosphereAltitude={0.25}
      animateIn={true}
      globeImageUrl={globe}
      backgroundImageUrl={background}
    />
  );
};
