const fn = (acc, el) => acc * el,
    identityElement = 1;

module.exports = list => list.reduce(fn, identityElement);
