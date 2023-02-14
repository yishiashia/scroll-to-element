import scrollToElement from './scrollToElement';

if (window) {
  if (window.scrollToElement === undefined) {
    window.scrollToElement = scrollToElement;
  } else {
    console.error("window.scrollToElement is already defined.")
  }
} else {
  console.error("The scroll-to-element only supported running on browser.")
}

export default scrollToElement;
