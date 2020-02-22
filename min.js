const fn = (acc, el) => Math.min(acc, el),
    idendityElement = Infinity;

module.exports = list => list.reduce(fn, idendityElement);
