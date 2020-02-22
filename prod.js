const fn = (acc, el) => acc * el
const idendityElement = 1

module.exports = list => list.reduce(fn, idendityElement)
