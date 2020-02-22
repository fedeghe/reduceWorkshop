const fn = (acc, el) => [...acc, ...el],
    idendityElement = [];

module.exports = list => list.reduce(fn, idendityElement);
