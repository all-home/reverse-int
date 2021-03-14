module.exports = function reverse (n) {
    let nAbs=Math.abs(n);
    return +String(nAbs).split('').reverse().join(''); 
}
