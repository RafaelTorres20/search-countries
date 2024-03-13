import React from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';
import globe from '../../assets/globe.jpg';
import background from '../../assets/background.png';
import { useGlobe } from './useGlobe';
import { useSearch } from '../../hooks/useSearch';

export const Globes = () => {
  const { globeEl, setLoading, globeWidth, globeHeight } = useGlobe();

  const { setCountry } = useSearch();
  return (
    <Globe
      onGlobeReady={() => {
        setLoading(false);
      }}
      onGlobeClick={() => {
        setCountry(undefined);
      }}
      width={globeWidth}
      height={globeHeight}
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
