import React, { useEffect } from "react";

export const useOnClickOutside = (ref: React.MutableRefObject<HTMLInputElement>, handler: () => void) => {
  console.log("ref ===", ref);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Element)) {
        return;
      }

      handler();
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
