const fn = (acc, el) => acc >  el ? acc : el,
    identityElement = -Infinity;

module.exports = list => list.reduce(fn, identityElement);
