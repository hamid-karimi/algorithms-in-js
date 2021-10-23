let count = 0
let storage = {}

const push = (val) => {
    storage [count] = val
    count++
}

const pop = () => {
    if(count === 0)
        return undefined

    count--
    const result = storage[count]
    delete storage[count]
    return result
}

const size = () => {
    return count
}

const peek = () => {
    return storage[count-1]
}

push(1)
push(2)
push(3)
console.log(peek())
console.log(pop())
console.log(peek())

