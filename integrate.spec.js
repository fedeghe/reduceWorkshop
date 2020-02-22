const integrate = require('./integrate');
const benchmarks = require('./benchmarks/integrals')
describe('integrate with reduce ', () => {
    describe('more math', () => {
        it('loop Integrate', () => {
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
});