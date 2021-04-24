let arr = [1, 2, 3, 4, 5];
// addition operation and initial state value
const num = arr.reduce((acumulator, elem) => (acumulator += elem), 3);
console.log(num);
