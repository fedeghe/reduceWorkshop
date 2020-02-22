const fn = (acc, el) => acc.concat(el),
    identityElement = '';

module.exports = list => list.reduce(fn, identityElement);
