import { useEffect, useState } from 'react';

/**
 * Custom hook untuk mengontrol animasi
 * @param {string} initialClass - Kelas awal sebelum animasi
 * @param {string} animatedClass - Kelas setelah animasi
 * @param {number} delay - Waktu delay animasi dalam ms
 */
const useAnimation = (initialClass, animatedClass, delay = 300) => {
  const [animationClass, setAnimationClass] = useState(initialClass);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass(animatedClass);
    }, delay);

    return () => clearTimeout(timer);
  }, [animatedClass, delay]);

  return animationClass;
};

export default useAnimation;
