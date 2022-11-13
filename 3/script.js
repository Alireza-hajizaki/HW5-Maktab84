let count = 0;
const counter = (function () {
return function (counter = 0) {
count += counter;
return count;
}
})();
console.log(counter());
console.log(counter(1));
console.log(counter());
console.log(counter(9));
console.log(counter());
console.log(counter(-6));
console.log(counter());
console.log(counter(16));