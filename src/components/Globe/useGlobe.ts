import { useState, useRef, useEffect } from 'react';import { GlobeMethods } from 'react-globe.gl';
import { Vector3Like } from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { useSwitch } from '../../hooks/useSwitch';
import { useSearch } from '../../hooks/useSearch';

export const useGlobe = () => {
  const { isSwitchOn } = useSwitch();
  const { country } = useSearch();
  const [loading, setLoading] = useState<boolean>(true);
  const [focused, setFocused] = useState<boolean>(false);
  const [globeWidth, setGlobeWidth] = useState<number>(window.innerWidth);
  const [globeHeight, setGlobeHeight] = useState<number>(window.innerHeight);
  const globeEl = useRef<GlobeMethods>({} as GlobeMethods);
  const [controls, setControls] = useState<OrbitControls>({} as OrbitControls);
  const zoomInOutGlobe = () => {
    const initialPosition: Vector3Like = globeEl.current
      ?.camera()
      .position.clone() as Vector3Like;
    const destiny = globeEl.current?.toGeoCoords(initialPosition);
    const destinyPosition = globeEl.current?.getCoords(
      destiny.lat,
      destiny.lng,
      isSwitchOn ? destiny.altitude + 2 : destiny.altitude - 2
    ) as Vector3Like;
    isSwitchOn ? (controls.enableRotate = false) : (controls.enableRotate = true);
    animateCameraToTarget({
      targetPosition: {
        ...destinyPosition,
      },
      duration: 300,
      stop: false,
    });
  };

  useEffect(() => {
    const control = globeEl.current?.controls() as OrbitControls;
    globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: isSwitchOn ? 5 : 3 });
    control.autoRotateSpeed = 1;
    control.autoRotate = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = false;
    setControls(control);
  }, [loading]);

  useEffect(() => {
    if (loading) return;
    zoomInOutGlobe();
    if (focused) {
      controls.autoRotate = false;
    }
    if (controls && Object.keys(controls).length > 0 && !focused) {
      controls.autoRotate = true;
    }
  }, [focused, controls, isSwitchOn]);

  useEffect(() => {
    if (country !== undefined && !isSwitchOn) {
      const destinyPosition = globeEl.current?.getCoords(
        country?.latlng[0],
        country?.latlng[1],
        2
      );
      animateCameraToTarget({
        targetPosition: {
          ...destinyPosition,
        },
        duration: 1000,
        stop: false,
      });
      controls.autoRotate = false;
      return;
    }
    controls.autoRotate = true;
    return;
  }, [country, isSwitchOn]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setGlobeWidth(width);
      setGlobeHeight(height);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Função para animar a câmera até uma posição alvo
  function animateCameraToTarget(animate: {
    targetPosition: Vector3Like;
    stop: boolean;
    duration: number;
  }) {
    // Obtenha a posição inicial da câmera
    const initialPosition: Vector3Like = globeEl.current
      ?.camera()
      .position.clone() as Vector3Like;
    // Defina a duração da animação
    const duration = animate.duration ?? 1000;
    // Inicialize a variável startTime
    let startTime: any = null;
    // Função para atualizar a posição da câmera
    function updatePosition(timestamp: any) {
      // Se startTime não estiver definido, defina-o como o timestamp atual
      if (!startTime) startTime = timestamp;
      // Calcule o progresso da animação
      const progress = timestamp - startTime;
      // Calcule o valor de t, que é a fração do tempo que passou
      const t = Math.min(progress / duration, 1);
      // Interpole a posição da câmera entre a posição inicial e a posição alvo
      globeEl.current
        ?.camera()
        .position.lerpVectors(initialPosition, animate.targetPosition, t);

      // Se a animação ainda não terminou, solicite o próximo frame de animação
      if (t < 1) {
        requestAnimationFrame(updatePosition);
      }
    }
    // Inicie a animação
    requestAnimationFrame(updatePosition);
    setFocused(animate.stop);
  }

  return {
    globeEl,
    globeWidth,
    globeHeight,
    animateCameraToTarget,
    setLoading,
    setGlobeWidth,
    setGlobeHeight,
  };
};
