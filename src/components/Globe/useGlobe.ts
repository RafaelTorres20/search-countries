import { useState, useRef, useEffect } from 'react';
import { GlobeMethods } from 'react-globe.gl';
import { Vector3Like } from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

export const useGlobe = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [focused, setFocused] = useState<boolean>(false);
  const [globeWidth, setGlobeWidth] = useState<number>(window.innerWidth);
  const [globeHeight, setGlobeHeight] = useState<number>(window.innerHeight);
  const globeEl = useRef<GlobeMethods>({} as GlobeMethods);
  const [controls, setControls] = useState<OrbitControls>({} as OrbitControls);

  useEffect(() => {
    const control = globeEl.current?.controls() as OrbitControls;
    globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 4 });
    control.autoRotateSpeed = 1;
    control.autoRotate = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = false;
    setControls(control);
  }, [loading]);

  useEffect(() => {
    if (loading) return;
    if (focused) {
      controls.autoRotate = false;
    }
    if (controls && Object.keys(controls).length > 0 && !focused) {
      controls.autoRotate = true;
    }
  }, [focused, controls]);

  // Função para animar a câmera até uma posição alvo
  function animateCameraToTarget(targetPosition: Vector3Like) {
    // Obtenha a posição inicial da câmera
    const initialPosition: Vector3Like = globeEl.current
      ?.camera()
      .position.clone() as Vector3Like;
    // Defina a duração da animação
    const duration = 1000;
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
      globeEl.current?.camera().position.lerpVectors(initialPosition, targetPosition, t);

      // Se a animação ainda não terminou, solicite o próximo frame de animação
      if (t < 1) {
        requestAnimationFrame(updatePosition);
      }
    }
    // Inicie a animação
    requestAnimationFrame(updatePosition);
    setFocused(true);
  }

  return {
    animateCameraToTarget,
    globeEl,
    setLoading,
    globeWidth,
    setGlobeWidth,
    globeHeight,
    setGlobeHeight,
  };
};
