String.prototype.toProperCase = function() {
  try {
    const splitted = this.split(' ');
    const resArr = splitted.map(s => {
      const [firstChar, ...rest] = s;
      return `${firstChar.toUpperCase()}${rest.join('').toLowerCase()}`;
    });
    return resArr.join(' ');
  } catch(_) {
    return this;
  }
}
