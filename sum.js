const fn = (acc, el) => acc + el,
    identityElement = 0;

module.exports = list => list.reduce(fn, identityElement);
