const emp = ['pravin', 'ram', 'jaya']

// to add at the end of array 
// emp.push('kumar', 'raj')
// 
// emp.unshift('narayan')

// console.log(emp)

// emp.pop()

// console.log(emp)

// emp.shift()
// console.log(emp)


// const change_data = "Ram"

// const arr = emp.splice(emp.length, 0, 'kumar')
// console.log(arr)

// ==================================================================

const indxOf = emp.indexOf('ram')

const change_data = "Ram"

if (indxOf != -1) {
    // search and change data
    // const arr = emp.splice(indxOf, 1, change_data)

    // search and delete data
    const arr = emp.splice(indxOf, 1)

    console.log(emp)
    console.log(arr)
}
else {
    console.log(emp)
}



