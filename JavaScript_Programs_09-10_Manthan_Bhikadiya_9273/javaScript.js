// 1) JavaScript Program To Print Hello World 

console.log("Hello World");

// 2) JavaScript Program to Add Two Numbers 

{
    console.log("2) JavaScript Program to Add Two Numbers");

    let x = 20;
    let y = 30;

    console.log(x + y);
}

// 3) JavaScript Program to Find the Square Root


{
    console.log("3) JavaScript Program to Find the Square Root");

    let x = 2000;

    console.log(x * x);
}

// 4) JavaScript Program to Calculate the Area of a Triangle

{
    console.log("4) JavaScript Program to Calculate the Area of a Triangle");

    let hight = 10;
    let base = 10;
    let Area = (hight * base) / 2;

    console.log(Area);
}

// 5) JavaScript Program to Swap Two Variables 

{
    console.log("5) JavaScript Program to Swap Two Variables");

    let a = 70;
    let b = 50;
    console.log("A =", a, "|", "B =", b);
    a = a - b;
    b = a + b;
    a = b - a;
    console.log("A =", a, "|", "B =", b);
}

// 6) JavaScript Program to Solve Quadratic Equation 

{
    console.log("6) JavaScript Program to Solve Quadratic Equation");

    let a = 20;
    let b = 10;
    let c = 20;

    let ans = b * b - 4 * a * c;

    console.log(ans);
}

// 7) JavaScript Program to Convert Kilometres to Miles 

{
    console.log("7) JavaScript Program to Convert Kilometres to Miles");

    let kilometetrs = 10;
    let miles = kilometetrs * 0.621371

    console.log(miles);
}

// 8) Javascript Program to Convert Celsius to Fahrenheit 

{
    console.log("8) Javascript Program to Convert Celsius to Fahrenheit");

    let Celsius = 10;
    let Fahrenheit = (Celsius * 9 / 5) + 32;

    console.log(Fahrenheit);
}

// 10) Javascript Program to Check if a number is Positive, Negative, or Zero

{
    console.log("10) Javascript Program to Check if a number is Positive, Negative, or Zero");

    let num = 0;

    if (num < 0) {
        console.log("number is negetive");
    } else if (num > 0) {
        console.log("number is positive");
    } else {
        console.log("number is zero");
    }
}

// 11) Javascript Program to Check if a Number is Odd or Even

{
    console.log("11) Javascript Program to Check if a Number is Odd or Even");

    let num = 1;

    if (num % 2 == 0) {
        console.log("number is even");
    } else {
        console.log("number is odd");
    }
}

// 12) JavaScript Program to Find the Largest Among Three Numbers

{
    console.log("12) JavaScript Program to Find the Largest Among Three Numbers");

    let num1 = 3;
    let num2 = 4;
    let num3 = 2

    if (num1 >= num2 && num1 >= num3) {
        console.log(num1 + " is largest");
    } else if (num2 >= num1 && num2 >= num3) {
        console.log(num2 + " is largest");
    } else {
        console.log(num3 + " is largest");
    }
}

//13) JavaScript Program to Check Prime Number

{
    console.log("13) JavaScript Program to Check Prime Number");

    let num = 7
    let i = 2;
    for (i; i < num; i++) {
        if (num % i == 0)
            break;
    }
    num == i ? console.log("Prime Number") : console.log("Not Prime Number");
}
