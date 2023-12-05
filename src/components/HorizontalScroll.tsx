import { useEffect, useState } from 'react';

export const useHorizontalScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const container = document.getElementById('QuestionsMenu');
    if (container) {
      setScrollPosition(container.scrollLeft);
    }
  };

  useEffect(() => {
    console.log(scrollPosition)
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};
