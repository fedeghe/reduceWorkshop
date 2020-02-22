const fn = (acc, el) => acc && el,
    identityElement = true;

module.exports = list => list.reduce(fn, identityElement);
