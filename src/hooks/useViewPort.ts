import { useEffect, useState } from 'react';

function useViewPort() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const between1024And1366 = width >= 1024 && width <= 1366;
  const between768And1024 = width >= 768 && width <= 1024;

  if (between1024And1366 || between768And1024) {
    const isTablet: boolean = between1024And1366 || between768And1024;

    return { isTablet, isMobile: false };
  }

  const isMobile: boolean = width <= 768;

  return { isTablet: false, isMobile };
}

export { useViewPort };
