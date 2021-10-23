const destroyer = (... args) =>{
    const argsArr = args.slice(1)
   return args[0].filter(el => !argsArr.includes(el))
}

const myArray = [1, 2, 2, 3, 3, 5, 6, 1, 3]
console.log(destroyer((myArray), 2, 3, 6))