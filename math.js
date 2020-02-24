const withPrecision = dx => {
    const precisionMatch = `${dx}`.match(/\.(\d+)/),
        precision = precisionMatch ? precisionMatch[1].length : 0;
    return v => precision ? parseFloat(v.toFixed(precision), 10) : v;
}

/**
 * This is an experimental function to calculate the value of a
 * defined integral of a function ∈ C¹ (in a defined interval, obviously)
 * ----------------
 */
const integrate = (fn, a, b, dx = 0.01) => {
    const withPrecisionDx = withPrecision(dx),
        steps = (b - a) / dx,
        arr = Array.from({length: steps}, () => 0),
        res =  arr.reduce(
            (acc, el, i) => acc + fn(a + i * dx+ dx / 2) * dx,
        0);
    return withPrecisionDx(res);
};

const derive = (fn, a, dx = 0.01) => {
    const withPrecisionDx = withPrecision(dx),
        mid = dx / 2;
    return withPrecisionDx((fn(a + mid) - fn(a - mid)) / dx);
}
module.exports = {
    integrate,
    derive
}