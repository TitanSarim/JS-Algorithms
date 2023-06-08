function addOneTo(n){

    return n * n(n+1)/2
}

console.log(addOneTo(30))

var t1 = performance.now();
addOneTo(100000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
