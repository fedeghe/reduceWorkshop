const fn = (acc, el) => Math.max(acc, el),
    idendityElement = -Infinity;

module.exports = list => list.reduce(fn, idendityElement);
