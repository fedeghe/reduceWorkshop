const math = require('./math');
const benchmarks = require('./benchmarks/derivatives')
describe('derivate (not with reduce)', () => {
    it('derive function should give expected results', () => {
        benchmarks.forEach(b => {
            expect(math.derive(
                b.fn,
                b.point
            )).toEqual(b.expected);
        });
    });
});