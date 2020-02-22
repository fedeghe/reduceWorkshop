const fn = (acc, el) => Math.min(acc, el),
    identityElement = Infinity;

module.exports = list => list.reduce(fn, identityElement);
