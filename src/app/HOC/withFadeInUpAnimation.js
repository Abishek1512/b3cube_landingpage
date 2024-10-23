import React, { useEffect, useRef, useState } from 'react';

const withFadeInUpAnimation = (WrappedComponent) => {
  return ({ delay = 0, ...props }) => {
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false); // New state to track if the animation has run

    useEffect(() => {
      const handleScroll = () => {
        if (ref.current) {
          const { top } = ref.current.getBoundingClientRect();
          if (top < window.innerHeight && !hasAnimated) {
            setHasAnimated(true); // Set hasAnimated to true when animation runs
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check visibility on initial load

      return () => window.removeEventListener('scroll', handleScroll);
    }, [hasAnimated]); // Run effect when hasAnimated changes

    return (
      <div
        ref={ref}
        style={{
          transform: hasAnimated ? 'translate3d(0px, 0px, 0px)' : 'translate3d(0px, 100px, 0px)',
          opacity: hasAnimated ? 1 : 0,
          transition: `transform 0.5s ease-out ${delay}ms, opacity 0.5s ease-out ${delay}ms`,
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withFadeInUpAnimation;
