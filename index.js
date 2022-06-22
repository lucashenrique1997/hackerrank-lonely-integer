const aTest = [34, 95, 34, 64, 45, 95, 16, 80, 80, 75, 3, 25, 75, 25, 31, 3, 64, 16, 31]

console.log(lonelyinteger(aTest));

function lonelyinteger(a) {
    let sortedArray = a.sort()
    let size = sortedArray.length;
    console.log(sortedArray);

    if(sortedArray[0] !== sortedArray[1]) {
        return sortedArray[0];
    }

    if(sortedArray[size - 1] !== sortedArray[size - 2]) {
        return sortedArray[size - 1];
    }

    for(let i = 1; i < sortedArray.length - 1; i++) {
        if(sortedArray[i] !== sortedArray[i-1] && sortedArray[i] !== sortedArray[i+1]) {
            return sortedArray[i];
        }
    }
}