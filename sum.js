const fn = (acc, el) => acc + el,
    idendityElement = 0;

module.exports = list => list.reduce(fn, idendityElement);
