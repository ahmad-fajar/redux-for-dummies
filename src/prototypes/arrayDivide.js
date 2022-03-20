Array.prototype.divideBy = function(num, callback) {
  try {
    if (!num || typeof num !== 'number') return this;

    const isFunc = typeof callback === 'function';
    const res = [];

    let counter = 0;
    let group = [];
    let groupNum = 0;
    for (let i = 0, len = this.length; i < len; i++) {
      counter++;
      group.push(this[i]);

      if (counter % num === 0) {
        if (isFunc) {
          res.push(callback(group, groupNum));
        } else {
          res.push(group);
        }
        group = [];
        groupNum++;
        counter = 0;
      }
    }

    if (group.length) {
      if (isFunc) {
        res.push(callback(group, groupNum));
      } else {
        res.push(group);
      }
    }

    return res;
  } catch(_) {
    return this;
  }
}