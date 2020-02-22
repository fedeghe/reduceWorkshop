const fn = (acc, el) => acc + el
const idendityElement = 0

module.exports = list => list.reduce(fn, idendityElement)
