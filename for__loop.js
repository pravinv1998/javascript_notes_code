let names = ['jay', 'kunal', 'ramesh', 'kumar', 'raj']

// traditional for loop
// for (let i = 0; i < names.length; i++) {
//     const element = names[i];
//     console.log(element)

// }

// for in loop 

// for (const i in names) {
//     console.log(i)
//     console.log(names[i])
// }



// for of loop 

// for (const i of names) {
//     console.log(i)
// }



// forEach loop 

names.forEach((element, index, array) => (
    console.log(` element - ${element} | index - ${index} | array - ${array} `)
))
