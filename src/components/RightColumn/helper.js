export const getStatColor = (percent) => {
  switch (true) {
    case percent < 0.1: return 'coral';
    case percent < 0.3: return 'brown';
    case percent < 0.5: return 'cornflowerblue';
    case percent < 0.8: return 'forestgreen';
    default: return 'darkgreen';
  }
};
