const fn = (acc, el) => acc && el,
    idendityElement = true;

module.exports = list => list.reduce(fn, idendityElement);
