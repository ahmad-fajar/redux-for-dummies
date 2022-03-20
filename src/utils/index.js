export * from './debounce';

export const cloneObject = o => JSON.parse(JSON.stringify(o));

export const safeParseJson = (json, defVal = {}) => {
  try {
    const parsed = JSON.parse(json);
    console.log({ parsed });
    return parsed;
  } catch (_) {
    console.log({ _ });
    return defVal;
  }
};
