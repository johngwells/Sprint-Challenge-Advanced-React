import React from 'react';

import { useLightMode } from '../hooks/useLightMode';

const LightMode = () => {
  const [lightMode, setLightMode] = useLightMode('light-mode', false);
  const toggleMode = e => {
    e.preventDefault();
    setLightMode(!lightMode);
  };

  return (
    <div className='light-mode__toggle'>
      <div
        onClick={toggleMode}
        className={lightMode ? 'App-header' : 'light-mode'}
      >Womens World Cup</div>
    </div>
  );
}

export default LightMode;
