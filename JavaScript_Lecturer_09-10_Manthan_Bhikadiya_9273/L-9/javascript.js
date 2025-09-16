// Number.isFinite()
{
    console.log("Number.isFinite()");

    console.log(Number.isFinite(100));
    console.log(Number.isFinite(Infinity));
    console.log(Number.isFinite('100'));
    console.log(Number.isFinite(NaN));
}

// Number.isNaN()
{
    console.log("Number.isNaN()");

    console.log(Number.isNaN(NaN));
    console.log(Number.isNaN(10));
    console.log(Number.isNaN('hello'));
    console.log(Number.isNaN('hello' / 2));
}

// Number.isInteger()
{
    console.log("Number.isInteger()");

    console.log(Number.isInteger(10));
    console.log(Number.isInteger(10.5));
    console.log(Number.isInteger('10'));
}

// Number.isSafeInteger()
{
    console.log(Number.isSafeInteger(100));
    console.log(Number.isSafeInteger(Math.pow(2, 53) - 1));
    console.log(Number.isSafeInteger(Math.pow(2, 53)));
}

// parseFloat()
{
    console.log("parseFloat()");

    console.log(parseFloat("3.14"));
    console.log(parseFloat("100px"));
    console.log(parseFloat("abc"));
}
