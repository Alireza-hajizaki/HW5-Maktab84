const john = { name: "John", age: 25 };
const pete = { name: "Pete", age: 30 };
const mary = { name: "Mary", age: 29 };
const peter = { name: "Mary", age: 20 };

const arr = [john, pete, mary, peter];

function getAverageAge(val) {
  let sum = 0;
  val.forEach((item) => {
      sum += item.age;
    });

    const avg = sum / arr.length;
  return avg;
}

console.log(getAverageAge(arr)); // (25 + 30 + 29 +20) / 4 = 26
// redius