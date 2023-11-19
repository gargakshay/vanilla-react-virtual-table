import { useRef, useEffect, useState } from 'react';

import { handleScroll } from './helpers';

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const bodyRef = useRef();

  useEffect(() => {
    const element = bodyRef.current || window;
    console.log('element', element);
    element.addEventListener(
      'scroll',
      handleScroll(setScrollPosition, setIsScrollEnd)
    );
    return () =>
      element.removeEventListener(
        'scroll',
        handleScroll(setScrollPosition, setIsScrollEnd)
      );
  }, [setScrollPosition, bodyRef]);

  return [bodyRef, scrollPosition, isScrollEnd];
}
