// find(callbackFn)
// find(callbackFn, thisArg)
{
    let array = [10, 20, 30, 40, 50]

    let result = array.find((val) => val < 40)

    console.log(result);
}

// findLast(callbackFn)
// findLast(callbackFn, thisArg)
{
    let array = [10, 20, 30, 40, 50]

    let result = array.findLast((val) => val < 40)

    console.log(result);
}

// findIndex(callbackFn)
// findIndex(callbackFn, thisArg)
{
    let array = [10, 20, 30, 40, 50]

    let result = array.indexOf(40);

    console.log(result);
}

// findLastIndex(callbackFn)
// findLastIndex(callbackFn, thisArg)
{
    let array = [10, 20, 30, 40, 50, 60, 70, 80, 40, 90, 20]

    let result = array.lastIndexOf(40);

    console.log(result);
}

// forEach(callbackFn)
// forEach(callbackFn, thisArg)
{
    let array = [10, 20, 30, 40]

    let result = array.forEach((val) => console.log(val));

    console.log(result);
}

// includes(searchElement)
// includes(searchElement, fromIndex)
{
    let array = [10, 20, 30, 40]

    let result = array.includes(20);
    let result1 = array.includes(54);

    console.log(result);
    console.log(result1);
}

// indexOf(searchElement)
// indexOf(searchElement, fromIndex)
{
    let array = [10, 20, 30, 40]

    let result = array.indexOf(40);
    let result1 = array.indexOf(50);

    console.log(result);
    console.log(result1);
}

// lastIndexOf(searchElement)
// lastIndexOf(searchElement, fromIndex)
{
    let array = [10, 20, 30, 40, 50, 60, 40, 70]

    let result = array.lastIndexOf(40);
    let result1 = array.lastIndexOf(50);

    console.log(result);
    console.log(result1);
}

// pop()
{
    let array = [10, 20, 30, 40, 50, 60, 70]

    let result = array.pop();
    console.log(result);
    console.log(array);
    array.pop();
    console.log(array);
}

// push()
// push(element1)
// push(element1, element2)
// push(element1, element2, /* …, */ elementN)
{
    let array = []

    let result = array.push(10)

    console.log(array);
}