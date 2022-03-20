export function debounce(callback, timeout = 1000, immediate = false) {
  let timeoutID;

  return (...args) => {
    const context = this;

    const later = () => {
      timeoutID = null;
      if (!immediate) callback.apply(context, args);
    };

    const callNow = immediate && !timeoutID;
    clearTimeout(timeoutID);
    timeoutID = setTimeout(later, timeout);
    if (callNow) callback.apply(context, args);
  };
}
