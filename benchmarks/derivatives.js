module.exports = [{
    fn : x => x ** 3,
    point: 1,
    expected: 3
}, {
    fn : x => x ** 3,
    point: 2,
    expected: 12
}, {
    fn : x => x ** 3,
    point: 2.5,
    expected: 3 * 2.5 ** 2
}, {
    fn : x => Math.E ** x,
    point: 5,
    expected: parseFloat((Math.E ** 5).toFixed(2), 10)
}, {
    fn : x => Math.asin(x), // y' = 1 / √(1-x²)
    point: -0.3,
    expected: parseFloat((1 / Math.sqrt(1 - 0.09 )).toFixed(2), 10)
}, {
    fn : x => Math.tan(x), // y' = 1 / cos²(x)
    point: 0.5,
    expected: parseFloat((1 / Math.cos(0.5 )**2).toFixed(2), 10)
}, {
    fn : x => Math.acos(x), // y' = - 1 / √(1-x²)
    point: 0.5,
    expected: parseFloat((-1 / Math.sqrt(1 - 0.25 )).toFixed(2), 10)
}];