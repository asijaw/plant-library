import React, { useState } from 'react';

function useHover() {
  const [hovering, setHovering] = useState(false);

  const mouseOver = () => setHovering(true);
  const mouseOut = () => setHovering(false);

  const actions = {
    onMouseOver: mouseOver,
    onMouseOut: mouseOut,
  };

  return [hovering, actions];
}

export default useHover;
