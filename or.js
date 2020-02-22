const fn = (acc, el) => acc || el,
    idendityElement = false;

module.exports = list => list.reduce(fn, idendityElement);
