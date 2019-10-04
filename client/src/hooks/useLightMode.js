import React, { useEffect } from 'react';

import useLocalStorage from './useLocalStorage';

export const useLightMode = () => {
  const [lightMode, setLightMode] = useLocalStorage('light-mode', false);

  useEffect(() => {
    lightMode
      ? document.body.classList.add('light-mode')
      : document.body.classList.remove('light-mode')
  }, [lightMode]);

  return [lightMode, setLightMode]
}
