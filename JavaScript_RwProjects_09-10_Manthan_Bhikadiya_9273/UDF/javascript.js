// Simple Addition Function
{
    console.log("Simple Addition Function");

    function add(a, b) {
        return a + b;
    }
    console.log(add(5, 3));
}

// Check Even or Odd
{
    console.log("Check Even or Odd");

    function isEven(num) {
        return num % 2 == 0;
    }

    console.log(isEven(4));
    console.log(isEven(5));
}

// Square of a Number
{
    console.log("Square of a Number");

    function square(num) {
        return num * num;
    }

    console.log(square(4));
}

// String Capitalizer
{
    console.log("String Capitalizer");

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    console.log(capitalize("hello world"));
}

console.log("arrow function");


// Simple Addition Function
{
    console.log("Simple Addition Function using arrow function");

    let add = (a, b) => a + b;
    console.log(add(5, 3));
}

// Check Even or Odd
{
    console.log("Check Even or Odd");

    let isEven = (num) => num % 2 == 0;

    console.log(isEven(4));
    console.log(isEven(5));
}

// Square of a Number
{
    console.log("Square of a Number");

    let square = (num) => num * num;

    console.log(square(4));
}

// String Capitalizer
{
    console.log("String Capitalizer");

    let capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    console.log(capitalize("hello world"));
}