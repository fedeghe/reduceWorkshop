const fn = (acc, el) => (...args) => el(acc(args)),
    identityElement = a => a;

module.exports = list => list.reduce(fn, identityElement);
