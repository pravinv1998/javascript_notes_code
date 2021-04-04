// const data = [1, 2, 3, 4, 5, 6]

// const newdata = data.map((elem, index, arr) => (
//     ` index is ${index} and element is ${elem} `
// ))

// console.log(newdata)



// const sqrData = [25, 36, 49, 64, 81]

// let ansSqr = sqrData.map((element) => (
//     ` elemente is ${element} and square root is ${Math.sqrt(element)} `
// ))

// console.log(ansSqr)


// use map nad filter method 
const num = [1, 2, 3, 4, 5, 6, 7, 8]

// let newNum = num.map(elem => elem * 2).filter(element => element > 10)
// console.log(newNum)

// console.log(num.map(elem => elem * 2).filter(element => element > 10))

// using reduce method along 
let newNum = num.map(elem => elem * 2).filter(element => element > 10).reduce((acumulator, elem) => (acumulator += elem))
console.log(newNum)