export const isLoading = (loadingObject) => {
  for (const load in loadingObject) {
    if (loadingObject[load]) {
      return true;
    }
  }
  return false;
};
