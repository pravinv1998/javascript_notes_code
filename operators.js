// var a = 4
// var b = 5
// var c;
// c = b
// b = a
// a = c

// var a = 4
// var b = 5

// a = a + b
// b = a - b
// a = a - b

// console.log(a, b)


// leap year check?

// var year = 2019

// debugger;
// if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
//     console.log(year + " is leap year")
// }
// else {
//     console.log(year + " is not leap year")
// }


// var age = 19

// console.log((age > 21) ? "able to marrige" : "go to college")


// var age = 22

// switch (age) {
//     case 18:
//         console.log("unable to vote")
//         break;

//     case 21:
//         console.log("able to vote")
//         break;


//     default:
//         console.log("this is default state")


// }




// var num = 0

// while (num < 10) {
//     console.log(num)
//     num += 1
// }



// var num = 200

// do {
//     console.log(num)
//     num += 1
//     console.log(num)
// } while (num < 10)



// var date

// for (date = 0; date < 10; date++) {
//     console.log(date)
// }

var l = [8, 9, 12, 15]
for (var i = 0; i < l.length; i++) {
    console.log("table of ", l[i])
    for (var j = 1; j <= 10; j++) {

        console.log(`${l[i]} * ${j} =   ${l[i] * j}`)
    }
    console.log("-----------------------------------------")
}