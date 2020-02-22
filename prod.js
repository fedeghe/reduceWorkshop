const fn = (acc, el) => acc * el,
    idendityElement = 1;

module.exports = list => list.reduce(fn, idendityElement);
