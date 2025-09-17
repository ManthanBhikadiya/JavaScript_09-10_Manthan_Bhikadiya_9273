// Array.isArray(value)
{
    console.log("isArray()");

    console.log(Array.isArray([1, 2, 3]));
    console.log(Array.isArray("hello"));
}

// Array.from(items)
// Array.from(items, mapFn)
// Array.from(items, mapFn, thisArg)
{
    console.log("Array.from(items)");

    console.log(Array.from("array"));
    console.log(Array.from([10, 20, 30], (a) => a + 10));
}

// Array.of()
// Array.of(element1)
// Array.of(element1, element2)
// Array.of(element1, element2, /* …, */ elementN)
{
    console.log("Array.of()");

    let arr = Array.of(1, 2, 3);
    console.log(arr);
}