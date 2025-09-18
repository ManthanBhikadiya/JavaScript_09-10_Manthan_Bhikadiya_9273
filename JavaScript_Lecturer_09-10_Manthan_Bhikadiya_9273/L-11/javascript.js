// at(index)
{
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    let result = array.at(2)
    console.log(result);

    let result1 = array.at(-4)
    console.log(result1);
}

// concat()
// concat(value1)
// concat(value1, value2)
// concat(value1, value2, /* …, */ valueN)
{
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let array1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    let result = array.concat(array1)
    console.log(result);
}

// copyWithin(target, start)
// copyWithin(target, start, end)
{
    let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    let result = array.copyWithin(2, 4);
    console.log(result);

    let result1 = array.copyWithin(2, 4, 6);
    console.log(result1);
}

// entries()
{
    let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    let result = array.entries();
    console.log(result.next().value);
    console.log(result.next().value);
    console.log(result.next().value);
    console.log(result.next().value);
}

// every(callbackFn)
// every(callbackFn, thisArg)
{
    let data = (item) => item > 5

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    console.log(array.every(data));
}

// fill(value)
// fill(value, start)
// fill(value, start, end)
{
    let array = [1, 2, 3, 4]
    
    let result = array.fill('a');
    console.log(result);

    let result1 = array.fill('a', 3);
    console.log(result1);
    
    let result2 = array.fill('a', 1, 2);
    console.log(result2);
}