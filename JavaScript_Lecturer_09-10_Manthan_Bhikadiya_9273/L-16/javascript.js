// Object.assign()
// Object.assign(target)
// Object.assign(target, source1)
// Object.assign(target, source1, source2)
// Object.assign(target, source1, source2, /* …, */ sourceN)
{
    let obj1 = { name: "Manthan", age: 19 };
    let obj2 = { city: "surat", state: "Gujarat" };

    let obj3 = Object.assign(obj1, obj2);
    console.log(obj3);
}

// Object.create()
// Object.create(proto)
// Object.create(proto, propertiesObject)
{
    let obj1 = { name: "Manthan", age: 19 };
    let obj2 = Object.create(obj1);
    obj2.city = "surat";
    obj2.state = "Gujarat";
    console.log(obj2);
    console.log(obj2.name);
    console.log(obj2.age);
}

// Object.entries()
// Object.entries(obj)
{
    let obj1 = { name: "Manthan", age: 19, city: "surat", state: "Gujarat" };
    let result = Object.entries(obj1);
    console.log(result);
}

// Object.fromEntries()
// Object.fromEntries(iterable)
{
    let arr = new Map([["name", "Manthan"], ["age", 19], ["city", "surat"], ["state", "Gujarat"]]);
    let result = Object.fromEntries(arr);
    console.log(result);
}

// Object.freeze()
// Object.freeze(obj)
{
    let obj1 = { name: "Manthan", age: 19, city: "surat", state: "Gujarat" };
    Object.freeze(obj1);
    obj1.age = 20;
    console.log(obj1);
}

// Object.groupBy()
// Object.groupBy(items, callbackFn)
{
    let arr = [
        { name: "Manthan", age: 19 },
        { name: "Harsh", age: 20 },
        { name: "Meet", age: 19 },
    ];

    let result = Object.groupBy(arr, (item) => item.age);
    console.log(result);
}

// Object.hasOwn()
// Object.hasOwn(obj, prop)
{
    let obj1 = { name: "Manthan", age: 19, city: "surat",state: "Gujarat" };
    console.log(Object.hasOwn(obj1, "age"));
    console.log(Object.hasOwn(obj1,"country"));
}

// Object.is()
// Object.is(value1, value2)
{
    console.log(Object.is(5, 5));
    console.log(Object.is(5, '5'));
}

// Object.keys()
// Object.keys(obj)
{
    let obj1 = { name: "Manthan", age: 19, city: "surat", state: "Gujarat" };
    let result = Object.keys(obj1);
    console.log(result);
}

// Object.values()
// Object.values(obj)
{
    let obj1 = { name: "Manthan", age: 19, city: "surat", state: "Gujarat" };
    let result = Object.values(obj1);
    console.log(result);
}