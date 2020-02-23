const integrate = require('./integrate');
const benchmarks = require('./benchmarks/integrals')
describe('integrate with reduce ', () => {
    it('integration function should give expected results', () => {
        benchmarks.forEach(b => {
            expect(integrate(
                b.fn,
                b.interval[0],
                b.interval[1],
                b.step
            )).toEqual(b.expected);
        });
    });
});