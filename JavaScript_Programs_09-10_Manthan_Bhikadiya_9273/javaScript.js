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

{
    console.log("9) Javascript Program to Generate a Random Number");

    let randomNum = Math.floor(Math.random() * 100) + 1;

    console.log(randomNum);
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

// 14) JavaScript Program to Print All Prime Numbers in an Interval

{
    console.log("14) JavaScript Program to Print All Prime Numbers in an Interval");

    let min = 10;
    let max = 50;

    for (let num = min; num <= max; num++) {
        let i = 2;
        for (i; i < num; i++) {
            if (num % i == 0)
                break;
        }
        if (num == i) {
            console.log(num);
        }
    }
}

// 15) JavaScript Program to Find the Factorial of a Number

{
    console.log("15) JavaScript Program to Find the Factorial of a Number");

    let num = 5;
    let n = 1;
    for (let i = 1; i <= num; i++) {
        n *= i;
    }
    console.log(n);
}

// 16) JavaScript Program to Display the Multiplication Table

{
    console.log("16) JavaScript Program to Display the Multiplication Table");

    let num = 5;

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// 17) JavaScript Program to Print the Fibonacci Sequence

{
    console.log("17) JavaScript Program to Print the Fibonacci Sequence");

    let num = 10;
    let a = 0;
    let b = 1;
    let c = 0;

    for (let i = 1; i <= num; i++) {
        console.log(a);
        c = a + b;
        a = b;
        b = c;
    }
}

{
    console.log("18) JavaScript Program to Check Armstrong Number");

    let num = 153;
    let sum = 0;
    let temp = num;
    let rem;
    while (temp > 0) {
        rem = temp % 10;
        sum += rem * rem * rem;
        temp = parseInt(temp / 10);
    }
    if (sum == num) {
        console.log(num + " is armstrong number");
    } else {
        console.log(num + " is not armstrong number");
    }
}

{
    console.log("19) JavaScript Program to Find Armstrong Number in an Interval");

    let min = 100;
    let max = 500;
    for (let num = min; num <= max; num++) {
        let sum = 0;
        let temp = num;
        let rem;
        while (temp > 0) {
            rem = temp % 10;
            sum += rem * rem * rem;
            temp = parseInt(temp / 10);
        }
        if (sum == num) {
            console.log(num + " is armstrong number");
        }
    }
}
// 20) JavaScript Program to Make a Simple Calculator

// {
//     console.log("20) JavaScript Program to Make a Simple Calculator");

//     let num1 = parseInt(prompt("Enter first number:"));
//     let operator = prompt("Enter operator (+, -, *, /):");
//     let num2 = parseInt(prompt("Enter second number:"));

//     let result;

//     switch (operator) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             if (num2 !== 0) {
//                 result = num1 / num2;
//             } else {
//                 result = "Error! Division by zero.";
//             }
//             break;
//         default:
//             result = "Invalid operator!";
//     }

//     console.log(`${num1} ${operator} ${num2} = ${result}`);
// }

// 21) JavaScript Program to Find the Sum of Natural Numbers 

{
    console.log("21) JavaScript Program to Find the Sum of Natural Numbers ");

    let n = 10;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    console.log("natural numbers is: " + sum);
}

// 22) JavaScript Program to Check if the Numbers Have Same Last Digit 

{
    console.log("22) JavaScript Program to Check if the Numbers Have Same Last Digit ");

    let num1 = 13;
    let num2 = 23;

    let lastnum1 = num1 % 10
    let lastnum2 = num2 % 10

    if (lastnum1 === lastnum2) {
        console.log("last digits are seam");
    } else {
        console.log("last digits are not seam");
    }
}

// 23) JavaScript Program to Find HCF or GCD 

{
    console.log("23) JavaScript Program to Find HCF or GCD");

    let num1 = 10;
    let num2 = 30;
    let HCF;

    for (let i = 1; i <= num1 && num2; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            HCF = i;
        }
    }
    console.log("HCF is " + HCF);
}

// 24) JavaScript Program to Find LCM
{
    console.log("24) JavaScript Program to Find LCM");

    let num1 = 15;
    let num2 = 20;
    let lcm = 1;

    for (let i = 1; i <= num1 * num2; i++) {
        if (i % num1 == 0 && i % num2 == 0) {
            lcm = i;
        }
    }

    console.log("LCM is: " + lcm);
}

// 25) JavaScript Program to Find the Factors of a Number 
{
    console.log("25) JavaScript Program to Find the Factors of a Number ");

    let num = 20;
    console.log("Factors of a Number are:");

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }
}

{
    console.log("26) JavaScript Program to Find Sum of Natural Numbers Using Recursion");

    function sum(n) {
        if (n <= 1) {
            return n;
        } else {
            return n + sum(n - 1);
        }
    }
    let num = 10;
    console.log("Sum of Natural Numbers is: " + sum(num));
}

// 27) JavaScript Program to Guess a Random Number 
// {
//     console.log("27) JavaScript Program to Guess a Random Number");

//     let rendomNum = Math.floor(Math.random() * 10);

//     let guess = prompt("Guess a number(0-10):")

//     if (rendomNum == guess) {
//         console.log("You are right");
//     } else {
//         console.log("you are wrong the rigt answer is:" + rendomNum);
//     }
// }

{
    console.log("29) JavaScript Program to Display Fibonacci Sequence Using Recursion");

    function fibonacci(n) {
        if (n <= 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
    let num = 10;
    console.log("fibonacci is: " + fibonacci(num));
}

{
    console.log("30) JavaScript Program to Find Factorial of Number Using Recursion");

    function factorial(n) {
        if (n <= 1) {
            return n;
        } else {
            return n * factorial(n - 1);
        }
    }
    let num = 5;
    console.log("Factorial is: " + factorial(num));
}

// 31) JavaScript Program to Convert Decimal to Binary
{
    console.log("31) JavaScript Program to Convert Decimal to Binary");

    let Decimal = 10;

    let Binary = Decimal.toString(2);

    console.log("Decimal = " + Decimal);
    console.log("Binary = " + Binary);
}

// 32) JavaScript Program to Find ASCII Value of Character
{
    console.log("32) JavaScript Program to Find ASCII Value of Character");

    let Character = "A";

    let ASCII = Character.charCodeAt(0);

    console.log(Character + " ASCII = " + ASCII);

}

// 33) JavaScript Program to Check Whether a String is Palindrome or Not
{
    console.log("33) JavaScript Program to Check Whether a String is Palindrome or Not");

    let String = "mam";

    let str = String.split("").reverse().join("");

    if (String == str) {
        console.log(String + " is palindorme");
    } else {
        console.log(String + " is not palindorme");
    }
}

// 34) JavaScript Program to Sort Words in Alphabetical Order 
{
    console.log("34) JavaScript Program to Sort Words in Alphabetical Order");

    let str = "n a b k l s f g y u i o w e r q c d h j m p t v x z";

    let words = str.split(" ");

    words.sort();

    let sortStr = words.join(" ");

    console.log("Sorted Words: " + sortStr);
}

// 35) JavaScript Program to Replace Characters of a String
{
    console.log("35) JavaScript Program to Replace Characters of a String");

    let String = "hello world";

    let String1 = String.replace("h", "H");

    console.log(String1);
}

// 36) JavaScript Program to Reverse a String
{
    console.log("36) JavaScript Program to Reverse a String");

    let String = "hello world";

    let String1 = String.split("").reverse().join("");

    console.log(String1);
}

{
    console.log("37) JavaScript Program to Create Objects in Different Ways");

    // 1) object literal
    let obj1 = {
        name: "manthan",
        age: 19
    };
    console.log(obj1);
    // 2) object constructor
    let obj2 = new Object();
    obj2.name = "manthan";
    obj2.age = 19;
    console.log(obj2);
    // 3) object create method
    let obj3 = Object.create(null);
    obj3.name = "manthan";
    obj3.age = 19;
    console.log(obj3);
    // 4) class
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    let obj4 = new Person("manthan", 19);
    console.log(obj4);
    // 5) function constructor
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    let obj5 = new Person1("manthan", 19);
    console.log(obj5);
}

{
    console.log("38) JavaScript Program to Check the Number of Occurrences of a Character in the String");

    let String = "hello world";

    let char = "l";
    let count = 0;
    for (let i = 0; i < String.length; i++) {
        if (String[i] === char) {
            count++;
        }
    }
    console.log(`number of ${char} is: ${count}`);
}

// 39) JavaScript Program to Convert the First Letter of a String into UpperCase
{
    console.log("39) JavaScript Program to Convert the First Letter of a String into UpperCase");

    let String = "hello world";

    let String1 = String.charAt(0).toUpperCase() + String.slice(1);
    console.log(String1);
}

// 40) JavaScript Program to Count the Number of Vowels in a String
{
    console.log("40) JavaScript Program to Count the Number of Vowels in a String");

    let String = "hello world";

    let vowels = "aeiou";
    let count = 0;

    for (let i = 0; i < String.length; i++) {
        if (vowels.includes(String[i])) {
            count++;
        }
    }
    console.log(`number of vowels: ${count}`);
}

{
    console.log("41) JavaScript Program to Remove a Property from an Object");

    let obj = {
        name: "manthan",
        age: 19
    };
    console.log("Before removing property: ", obj);
    delete obj.age;
    console.log("After removing property: ", obj);
}

{
    console.log("42) JavaScript Program to Check Whether a String Starts and Ends With Certain Characters");

    let str = "Hello World";
    let start = "Hello";
    let end = "World";

    let startsWith = str.startsWith(start);
    let endsWith = str.endsWith(end);

    if (startsWith && endsWith) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

{
    console.log("43) JavaScript Program to Check if a Key Exists in an Object");

    let obj = {
        name: "manthan",
        age: 19
    };

    let key = "age";
    let exists = key in obj;

    console.log(exists);
}

{
    console.log("44) JavaScript Program to Clone a JS Object");

    let obj = {
        name: "manthan",
        age: 19
    };
    let cloneObj = { ...obj };

    console.log(cloneObj);
}

{
    console.log("45) JavaScript Program to Loop Through an Object");

    let obj = {
        name: "manthan",
        age: 19
    };
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

{
    console.log("46) JavaScript Program to Merge Property of Two Objects");

    let obj1 = {
        name: "manthan",
        age: 19
    };
    let obj2 = {
        city: "surat",
        country: "india"
    };
    let mergedObj = { ...obj1, ...obj2 };

    console.log(mergedObj);
}

{
    console.log("47) JavaScript Program to Count the Number of Keys/Properties in an Object");

    let obj = {
        name: "manthan",
        age: 19,
        city: "surat"
    };
    let count = Object.keys(obj).length;

    console.log(count);
}

{
    console.log("48) JavaScript Program to Add Key/Value Pair to an Object");

    let obj = {
        name: "manthan",
        age: 19
    };
    obj.city = "surat";

    console.log(obj);
}

{
    console.log("49) JavaScript Program to Replace All Occurrences of a String");

    let Str = "Hello JavaScript hi JavaScript";

    let newStr = Str.replaceAll("JavaScript", "Css");

    console.log(newStr);
}

{
    console.log("50) JavaScript Program to Create Multiline Strings ");

    let str = `            This 
             is 
          Multiline
           Strings`

    console.log(str);
}

{
    console.log("52) JavaScript Program to Generate Random String");

    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charLength = char.length;
    let result = '';
    let strLength = 10;

    for (let i = 0; i < strLength; i++) {
        let randomIndex = Math.floor(Math.random() * charLength);
        result += char[randomIndex];
    }

    console.log(result);
}

{
    console.log("53) JavaScript Program to Check if a String Starts With Another String");

    let str = "Hello World";
    let startStr = "Hello";

    let result = str.startsWith(startStr);

    console.log(result);
}

{
    console.log("54) JavaScript Program to Trim a String");

    let str = "       Hello World     "

    let result = str.trim();

    console.log(str);
    console.log(result);
}

{
    console.log("55) JavaScript Program to Convert Objects to Strings");

    let obj = {
        name: "manthan",
        age: 19
    };
    let str = JSON.stringify(obj);
    console.log(str);
    console.log(typeof str);
}

{
    console.log("56) JavaScript Program to Check Whether a String Contains a Substring");

    let str = "Hello World";
    let substr = "World";

    let result = str.includes(substr);

    console.log(result);
}

{
    console.log("57) JavaScript Program to Compare Two Strings");

    let str = "Hello World";
    let str1 = "Hello World";

    let result = str === str1;

    console.log(result);
}

{
    console.log("58) JavaScript Program to Encode a String to Base64");

    let str = "Hello World";

    let Base64 = btoa(str);

    console.log(Base64);

}

{
    console.log("59) JavaScript Program to Replace all Instances of a Character in a String");

    let str = "Hello World";

    let result = str.replaceAll("l", "a");

    console.log(result);
}

{
    console.log("60) JavaScript Program to Replace All Line Breaks with a space");

    let str = `Hello
    World`;
    let result = str.replace(/\n/g, ' ');

    console.log(result);
}

{
    console.log("61) JavaScript Program to Display Date and Time");

    let now = new Date();

    let date = now.getDate();
    let date1 = now.getMonth() + 1;
    let date2 = now.getFullYear();
    let date3 = now.getHours();
    let date4 = now.getMinutes();
    let date5 = now.getSeconds();

    console.log(`${date}/${date1}/${date2} ${date3}:${date4}:${date5}`);
}

{
    console.log("62) JavaScript Program to Check Leap Year");

    let Year = 2025;

    if (Year % 4 == 0) {
        console.log(Year + " is leap year");
    } else {
        console.log(Year + " is not leap year");
    }
}

{
    console.log("63) JavaScript Program to Format the Date");

    let now = new Date();

    let date = now.getDate();
    let date1 = now.getMonth() + 1;
    let date2 = now.getFullYear();

    console.log(`${date}/${date1}/${date2}`)
    console.log(`${date2}/${date1}/${date}`)
}

{
    console.log("64) Javascript Program to Display Current Date");

    let now = new Date();

    let date = now.getDate();
    let date1 = now.getMonth() + 1;
    let date2 = now.getFullYear();

    console.log(`${date}/${date1}/${date2}`)
}

{
    console.log("67) JavaScript Program to Remove Specific Item From an Array");

    function remove(arr, ItemtoRemove) {
        return arr.filter(item => item !== ItemtoRemove);
    }

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let ItemtoRemove = 5;
    let newArr = remove(arr, ItemtoRemove);

    console.log(newArr);
}

{
    console.log("68) JavaScript Program to Check if An Array Contains a Specified Value");

    function Check(arr, value) {
        return arr.includes(value);
    }

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log(Check(arr, 5));
    console.log(Check(arr, 10));
}

{
    console.log("69) JavaScript Program to Insert Item in an Array");

    function insert(arr, value) {
        arr.push(value);
        return arr;
    }

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log(insert(arr, 10));
}

{
    console.log("70) JavaScript Program to Append an Object to an Array");
    
    function append(arr, obj) {
        arr.push(obj);
        return arr;
    }
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let obj = { name: "manthan", age: 19 };
    console.log(append(arr, obj));
}

{
    console.log("72) JavaScript Program to Empty an Array");

    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(arr);

    arr.length = 0;

    console.log(arr);
}

{
    console.log("73) JavaScript Program to Add Element to Start of an Array");

    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(arr);

    arr.unshift(0);
    console.log(arr);
}

{
    console.log("74) JavaScript Program to Remove Duplicates From Array");

    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 7, 8, 9];

    let uniqueArr = arr.filter((value, index) => arr.indexOf(value) === index);

    console.log(uniqueArr);
}

{
    console.log("75) JavaScript Program to Merge Two Arrays and Remove Duplicate Items");

    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [4, 5, 6, 7, 8];

    let merged = arr1.concat(arr2);

    let uniqueArr = merged.filter((value, index) => merged.indexOf(value) === index);

    console.log(uniqueArr);
}

{
    console.log("76) JavaScript Program to Sort Array of Objects by Property Values");

    let arr = [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 },
        { name: "Jim", age: 35 }
    ];
    arr.sort((a, b) => a.age - b.age);

    console.log(arr);
}

{
    console.log("77) JavaScript Program to Create Two Dimensional Array");

    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    console.log(arr[0]);
    console.log(arr[0][0]);
    console.log(arr[1]);
    console.log(arr[2]);
}

{
    console.log("78) JavaScript Program to Extract Given Property Values from Objects as Array");


    function extractValues(arr, property) {
        return arr.map(obj => obj[property]);
    }

    let arr = [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 },
        { name: "Jim", age: 35 }
    ];

    console.log(extractValues(arr, "name"));
    console.log(extractValues(arr, "age"));
}

{
    console.log("79) JavaScript Program to Compare Elements of Two Arrays");
    
    function compareArrays(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }   
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [1, 2, 3, 4, 5];
    console.log(compareArrays(arr1, arr2));
}

{
    console.log("80) JavaScript Program to Get Random Item From an Array");

    function RandomItem(arr) {
        let Index = Math.floor(Math.random() * arr.length);
        return arr[Index];
    }

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log(RandomItem(arr));
}

{
    console.log("81) JavaScript Program To Perform Intersection Between Two Arrays");

    function Intersection(arr1, arr2) {
        return arr1.filter(value => arr2.includes(value));
    }
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [4, 5, 6, 7, 8];
    console.log(Intersection(arr1, arr2));
}

{
    console.log("85) JavaScript Program To Check If A Variable Is undefined or null");

    let var1;
    let var2 = null;
    let var3 = 10;

    console.log(var1 === undefined);
    console.log(var2 === null);
    console.log(var3 === undefined);
    console.log(var3 === null);
}

{
    console.log("86) JavaScript Program to Set a Default Parameter Value For a Function");

    function greet(name = "") {
        return `Hello, ${name}!`;
    }
    console.log(greet());
    console.log(greet("John"));
    console.log(greet("Ron"));
}

{
    console.log("88) Javascript Program to Generate a Random Number Between Two Numbers");

    function RandomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(RandomNum(1, 10));
}

{
    console.log("89) JavaScript Program To Get The Current URL");

    console.log(window.location.href);
}

{
    console.log("90) JavaScript Program to Validate An Email Address");

    function validateEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    console.log(validateEmail("manthan@gmail.com"));
    console.log(validateEmail("manthan@gmail"));
}

{
    console.log("91) JavaScript Program to Check If a Variable is of Function Type");

    let var1 = function () { };
    console.log(typeof var1 === "function");
}

{
    console.log("92) JavaScript Program To Work With Constants");

    const PI = 3.14;
    // PI = 3.15;
    console.log(PI);
}

// {
//     console.log("93) JavaScript Program to Pass Parameter to a setTimeout() Function");

//     function greet(name) {
//         console.log(`Hello, ${name}!`);
//     }
//     setTimeout(greet, 2301, "John");
// }

{
    console.log("94) JavaScript Program to Generate a Range of Numbers and Characters");

    function Range(start, end) {
        let Array = [];
        for (let i = start; i <= end; i++) {
            Array.push(i);
        }
        return Array;
    }
    console.log(Range(1, 10));
    console.log(Range('a'.charCodeAt(0), 'z'.charCodeAt(0)).map(code => String.fromCharCode(code)));
}

{
    console.log("95) JavaScript Program to Perform Function Overloading");

    function add(a, b, c) {
        if (c !== undefined) {
            return a + b + c;
        } else {
            return a + b;
        }
    }

    console.log(add(1, 2));
    console.log(add(1, 2, 3));
}

{
    console.log("98) JavaScript Program to Check if a Number is Float or Integer");

    function isInteger(num) {
        return Number.isInteger(num);
    }
    function isFloat(num) {
        return !Number.isInteger(num);
    }

    let num = 10.6

    if (isInteger(num)) {
        console.log(num + " is integer");
    } else if (isFloat(num)) {
        console.log(num + " is float");
    }
}

{
    console.log("101) JavaScript Program to Remove All Whitespaces From a Text");

    let str = "  Hello    World ";

    let newStr = str.replace(/\s+/g, '');

    console.log(newStr);
}

{
    console.log("102) JavaScript Program to Write to Console");

    console.log("Hellow World");
}