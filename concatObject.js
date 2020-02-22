const fn = (acc, el) => ({...acc, ...el}),
    identityElement = {};

module.exports = list => list.reduce(fn, identityElement);
