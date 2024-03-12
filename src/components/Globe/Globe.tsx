import React, { useEffect } from 'react';import Globe, { GlobeMethods } from 'react-globe.gl';
import globe from '../../assets/globe.jpg';
import background from '../../assets/background.png';
import { useGlobe } from './useGlobe';

export const Globes = () => {
  const { globeEl, setLoading, globeWidth, setGlobeWidth } = useGlobe();
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setGlobeWidth(width);
    };

    window.addEventListener('resize', handleResize);

    // Remover o event listener quando o componente desmontar
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Globe
      onGlobeReady={() => {
        setLoading(false);
      }}
      width={globeWidth}
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
