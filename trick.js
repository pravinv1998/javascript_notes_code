// let line1 = [1, 2, 3, 4, 5]
// let line2 = [6, 7, 8, 9, 10]
// let line3 = [11, 12, 13, 14, 15, 16]

// console.log({ line1, line2, line3 })
// console.table([line1, line2, line3])

// let pravin = { age: 22, height: 5.8, profession: "JavaScript Developer" }
// let mayur = { age: 20, height: 5.5, profession: "Commerce Student" }
// let nikhil = { age: 15, height: 5, profession: "10th Standard Student" }

// console.log({ pravin, mayur, nikhil })
// console.table([pravin, mayur, nikhil])

let url = "https://reqres.in/api/users?page=2"

// function callApi(url) {

fetch("https://reqres.in/api/users?page=2")
    .then(response => response.json())
    .then(data => console.table(data))
// }

// callApi(url)