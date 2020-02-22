const fn = (acc, el) => (...args) => el(acc(args)),
    idendityElement = a => a;

module.exports = list => list.reduce(fn, idendityElement);
