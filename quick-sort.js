const quickSort = (arr) => {
    if(arr.length <= 1)
        return arr

    const pivot = arr[arr.length - 1]
    const leftArr = []
    const rightArr = []

    for(const el of arr.slice(0, arr.length -1) )
        el < pivot ? leftArr.push(el) : rightArr.push(el)
    
    return [... quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

const myArray = [1, 2, 5, 6, 2, 1, 652, 18, 591, 12512, 5912, 512, 9, 2, 78, 129, 87, 986, 21, 8]

console.log(quickSort(myArray))