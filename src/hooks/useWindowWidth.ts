import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return width;
}

// Derived helpers para não repetir lógica nos componentes
export function useBreakpoint() {
  const width = useWindowWidth();
  return {
    isMobile:  width > 0 && width <= 640,
    isTablet:  width > 640 && width <= 1024,
    isDesktop: width > 1024,
    width,
  };
}
