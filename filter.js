let num = [12, 22, 32, 42, 52, 62]

const newData = num.filter(n => n >= 42)
console.log(newData)

console.log(num.filter(n => (n < 42)))