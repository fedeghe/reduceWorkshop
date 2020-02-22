const fn = (acc, el) => acc.concat(el),
    idendityElement = '';

module.exports = list => list.reduce(fn, idendityElement);
