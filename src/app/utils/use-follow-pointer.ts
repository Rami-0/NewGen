import { useState, RefObject, useEffect } from "react";
import { useMotionValue, useVelocity, frame } from "framer-motion";

export function useFollowPointerWithVelocity(ref: RefObject<HTMLElement>) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const xVelocity = useVelocity(xPoint);
  const yVelocity = useVelocity(yPoint);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2);
      yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return { x: xPoint, y: yPoint, xVelocity, yVelocity };
}
