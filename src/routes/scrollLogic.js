import { writable } from "svelte/store";

// A shared store for the active image index
export const activeImageIndex = writable(0);

// A function to update the active image index
export const updateActiveImage = (index) => {
  activeImageIndex.set(index);
};

// Throttling function
export const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(
        function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        },
        limit - (Date.now() - lastRan)
      );
    }
  };
};