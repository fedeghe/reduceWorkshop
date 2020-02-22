const map = require('./map'),
    filter = require('./filter'),
    find = require('./find'),
    some = require('./some'),
    sum = require('./sum'),
    prod = require('./prod'),
    min = require('./min'),
    max = require('./max'),
    and = require('./and'),
    or = require('./or'),
    concatList = require('./concatList'),
    concatObject = require('./concatObject'),
    concatString = require('./concatString'),
    compose = require('./compose'),
    integrate = require('./integrate');

describe('use reduce rewrite ', () => {
    const LIST = [1, 2, 3, 4],
        LIST_CHARS = ['A', 'B', 'C', 'D']
        LIST_BOOLS = [true, false, true, false],
        IS_EVEN = a => a % 2 === 0,
        IS_ODD = a => a % 2 !== 0;

    it('map', () => {
        expect(map(LIST, IS_ODD)).toEqual(LIST.map(IS_ODD));
        expect(map(LIST, IS_EVEN)).toEqual(LIST.map(IS_EVEN));
    });

    it('filter', () => {
        expect(filter(LIST, IS_EVEN)).toEqual(LIST.filter(IS_EVEN));
        expect(filter(LIST, IS_ODD)).toEqual(LIST.filter(IS_ODD));
    });

    it('find', () => {
        expect(find(LIST, IS_EVEN)).toEqual(LIST.find(IS_EVEN));
    });

    it('some', () => {
        expect(some(LIST, IS_EVEN)).toEqual(LIST.some(IS_EVEN));
    });

    it('integrate', () => {
        expect(integrate(
            x => x**3, // function to integrate
            1, 3       // integration interval
        )).toEqual(20);
        expect(integrate(
            x => x**4, // function to integrate
            1, 3       // integration interval
        )).toEqual(48.4);
    });
    describe('monoids', () => {
        it('sum', () => {
            expect(sum(LIST)).toEqual(10);
        });
        it('prod', () => {
            expect(prod(LIST)).toEqual(24);
        });
        it('min', () => {
            expect(min(LIST)).toEqual(1);
        });
        it('max', () => {
            expect(max(LIST)).toEqual(4);
        });
        it('and', () => {
            expect(and(LIST_BOOLS)).toEqual(false);
        });
        it('or', () => {
            expect(or(LIST_BOOLS)).toEqual(true);
        });
        it('concatList', () => {
            expect(concatList([LIST, LIST])).toEqual([1, 2, 3, 4, 1, 2, 3, 4]);
        });
        it('concatObject', () => {
            expect(
                concatObject([{ foo: 'FOO' }, { bar: 'BAR' }, { baz: 'BAZ' }])
            ).toEqual({ foo: 'FOO', bar: 'BAR', baz: 'BAZ' });
        });
        it('concatString', () => {
            expect(concatString(LIST_CHARS)).toEqual('ABCD');
        });
        it('compose', () => {
            expect(
                compose([a => 2 * a, a => a + 4, a => a.toString()])(4)
            ).toEqual('12');
        });
    });
});
