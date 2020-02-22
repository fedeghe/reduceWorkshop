const fn = (acc, el) => Math.max(acc, el),
    identityElement = -Infinity;

module.exports = list => list.reduce(fn, identityElement);
