const fn = (acc, el) => acc || el,
    identityElement = false;

module.exports = list => list.reduce(fn, identityElement);
