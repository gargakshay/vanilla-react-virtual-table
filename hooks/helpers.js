export function handleScroll(setScrollPosition, setIsScrollEnd) {
  return function (event) {
    const element = event.target;
    const isScrollEnd =
      element.scrollTop + element.offsetHeight >= element.scrollHeight;
    setScrollPosition(element.scrollTop);
    console.log('isScrollEnd', isScrollEnd);
    setIsScrollEnd(isScrollEnd);
  };
}
