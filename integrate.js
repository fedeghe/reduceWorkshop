/**
 * This is an experimental function to calculate the value of a
 * defined integral of a function ∈ C¹ (in a defined interval, obviously)
 * ----------------
 */
module.exports = (fn, a, b, dx = 0.01) => {
    const precisionMatch = `${dx}`.match(/\.(\d+)/),
        precision = precisionMatch ? precisionMatch[1].length : 0,
        steps = (b - a) / dx,
        arr = Array.from({length: steps}, () => 0),
        res =  arr.reduce(
            (acc, el, i) => acc + fn(a + i * dx+ dx / 2) * dx,
        0);
    return precision ? parseFloat(res.toFixed(precision), 10) : res;
};