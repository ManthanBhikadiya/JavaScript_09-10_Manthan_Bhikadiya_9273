// Function Declaration
{
    function sum(a, b) {
        return a + b;
    }

    console.log(sum(20, 20));
}

// function expression
{
    let sum = function (a, b) {
        console.log(a - b);
    }

    sum(2, 3);
}

// arrow function
{
    let sum = (a, b) => {
        console.log(a * b);
    }

    sum(2, 5)
}

// IIFE (Immediately Invoked Function Expression)
{
    (function (a, b) {
        console.log(a + b);
    })(10, 20)
}

// nested functions
{
    function sum(a, b) {
        function sub() {
            return a - b;
        }
        console.log(sub());
    }
    sum(5, 4);
}