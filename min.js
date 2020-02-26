const fn = (acc, el) => acc > el ? el : acc,
    identityElement = Infinity;

module.exports = list => list.reduce(fn, identityElement);
