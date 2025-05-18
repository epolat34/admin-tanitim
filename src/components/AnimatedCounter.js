import { useEffect, useState } from "react";

const AnimatedCounter = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16); // 60fps → 16ms aralıklarla

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [target, duration]);

  return <span>{count.toLocaleString("tr-TR")}</span>;
};

export default AnimatedCounter;
