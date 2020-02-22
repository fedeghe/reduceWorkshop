module.exports = (fn, a, b, dx = 0.01) => {
    const precisionMatch = `${dx}`.match(/\.(\d+)/),
        precision = precisionMatch ? precisionMatch[1].length : 0,
        steps = (b - a) / dx,
        arr = (new Array(parseInt(steps, 10))).fill(),
        res =  arr.reduce(
            (acc, el, i) => acc + fn(a + i * dx+ dx/2) * dx,
        0)
    return precision ? parseFloat(res.toFixed(precision), 10) : res
}