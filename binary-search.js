const binary = (val, arr) => {
    let lower = 0
    let upper = arr.length -1
    let times = 1

    while(lower <= upper){
        
        const middle = lower + Math.floor((upper - lower) / 2)
        if(val === arr[middle])
            return (`The index of ${val} in array is ${arr[middle]} and it takes ${times} times to find ${val}`)
       
        
        if(val < arr[middle])
            upper = middle - 1
        else
            lower = middle + 1

        
        
        times++
    }
    return undefined
}

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(binary(1, values))