import { useEffect, useState } from "react";

export const useOnScreen = (ref, thresholdOptions) => {

  const [isIntersecting, setIntersecting] = useState(false);
  const [getThreshold, setThreshold] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
      setThreshold(entry.intersectionRatio);
    }, {
      threshold: thresholdOptions
    }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return { isIntersecting, getThreshold };
}