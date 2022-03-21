export * from './debounce';

export const cloneObject = o => JSON.parse(JSON.stringify(o));

export const safeParseJson = (json, defVal = {}) => {
  try {
    const parsed = JSON.parse(json);
    return parsed;
  } catch (_) {
    return defVal;
  }
};
