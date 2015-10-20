var sqrt = Math.sqrt;
function square(x) {
    return x * x;
}

function diag(x, y) {
    return sqrt(square(x) + square(y));
}

console.log(square(11));
console.log(diag(4, 3));