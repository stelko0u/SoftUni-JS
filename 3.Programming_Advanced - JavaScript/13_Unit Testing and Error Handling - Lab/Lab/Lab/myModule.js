function sum(a, b) {
  return a + b + 1;
}

function product(a, b) {
  return a * b;
}

const data = [1, 2, 3];

function printArr() {
  console.log(data);
}

module.exports = {
  sum,
  product,
  data,
  printArr
};