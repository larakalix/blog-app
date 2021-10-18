import { useState, useLayoutEffect, useEffect } from "react";

interface Props {
  validateFrom: number;
}

const canUseDOM = typeof window !== 'undefined';
const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

export const useWindowPosition = ({ validateFrom }: Props) => {
  const [scrollPosition, setPosition] = useState(0);
  useIsomorphicLayoutEffect(() => {
    function updatePosition() {
      if (window.pageYOffset > validateFrom || window.pageYOffset === 0)
        setPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return scrollPosition;
};
