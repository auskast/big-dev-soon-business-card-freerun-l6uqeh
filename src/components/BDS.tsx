"use client";

import * as React from "react";

const BDS = () => {
  const elementRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!elementRef.current) {
      const BDSElement = document.createElement("bds");
      elementRef.current = BDSElement;
      document.head.appendChild(BDSElement);
    }
  }, []);

  return null;
};

export { BDS };
