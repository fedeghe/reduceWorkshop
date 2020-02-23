module.exports = [{
    /**
     * ∫x^3 dx = x^4 / 4 + C
     * 
     * thus from 1 to 3
     * (3^4 - 1^4) / 4 = 80 / 4 = 20
     */
    fn : x => x ** 3,
    interval: [1, 3],
    step: 0.01,
    expected: (3**4 - 1**4) / 4
}, {
    /**
     * ∫x^4 dx = x^5 / 5 + C
     * 
     * thus from 1 to 3
     * (3^5 - 1^5) / 5 = 242 / 5 = 48.4
     */
    fn : x => x ** 4,
    interval: [1, 3],
    step: 0.01,
    expected: (3**5 - 1**5) / 5
}, {
    /**
     * ∫1/x dx = ln|x| + C
     * 
     * thus from 3 to 5
     * ln 5 - ln 3
     */
    fn : x => 1/x,
    interval: [2, 5],
    step: 0.01,
    expected: parseFloat((
        Math.log(5) - Math.log(2)
    ).toFixed(2), 10)
}, {
    /**
     * ∫ln(x) dx = x * ln(x) - x + C
     * 
     * thus from 3 to 5
     * 5*ln5 -5 - (2*ln2 -2)
     */
    fn : x => Math.log(x),
    interval: [2, 5],
    step: 0.01,
    expected: parseFloat(
        (5 * Math.log(5) - 5
        - (2 * Math.log(2) - 2
    )).toFixed(2), 10)
}, {
    /**
     * ∫a^x dx = a^x / ln(a) + C
     * 
     * thus from 3 to 5
     * 5 * ln 5 - 2 * ln 2
     */
    fn : (x, a=3) => a ** x,
    interval: [2, 5],
    step: 0.001,
    expected: parseFloat((
        (3 ** 5 - 3 ** 2) / Math.log(3)
    ).toFixed(3), 10)
}, {
    /**
     * ∫x e^x dx = (p.p) = x * e^x - ∫e^x = (x-1) * e^x
     * 
     * thus from 3 to 5
     * 4e^5 - 2e^3 = 202.6144
     */
    fn : x => x * Math.E ** x,
    interval: [3, 5],
    step: 0.001,
    expected: parseFloat((
        4 * Math.E ** 5 - 2 * Math.E ** 3
    ).toFixed(3), 10)
},

/**
 * some from 
 * https://en.wikipedia.org/wiki/Lists_of_integrals
 */
{
    fn : x => x ** -x,
    interval: [0, 1],
    step: 0.00001,
    expected: 1.29128 
}, {
    fn : x => x ** x,
    interval: [0, 1],
    step: 0.00001,
    expected: 0.78342 
}];