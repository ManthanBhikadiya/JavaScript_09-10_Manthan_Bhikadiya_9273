// callback function
// {
//     function greet(name) {
//         console.log("Hello " + name);
//     }
//     function name(callback) {
//         let name = "world";
//         callback(name);
//     }

//     name(greet);
// }

// setTimeout function
// {
//     function greet() {
//         console.log("Hello world");
//     }
//     setTimeout(greet, 2000);
// }


// {
//     function times() {
//         let date = new Date();
//         let time = date.toLocaleTimeString();
//         console.log(time);
//         setTimeout(times, 1000)
//     }
//     times();
// }

// clearTimeout

{
    let count = 0;

    function time() {
        count+=1;
        console.log(count);
    }
    let id = setTimeout(time, 1000);
    // clearTimeout(id);
}

// setInterval
{
    let count = 0;

    function time() {
        count+=1;
        console.log(count);
    }
    let id = setInterval(time, 1000);
    clearInterval(id);
}