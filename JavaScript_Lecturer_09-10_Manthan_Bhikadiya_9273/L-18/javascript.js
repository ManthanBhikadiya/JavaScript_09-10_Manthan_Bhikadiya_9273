// constructor function
{
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.sayHello = function () {
            console.log(`Hello, My name is ${this.name}, I am ${this.age} years old`);
        }
    }
    const person = new Person("Manthan", 19, "Student");
    person.sayHello();
    console.log(person.name);
}

// constructor function with parameter

{
    function person(name, age) {
        this.name = name,
            this.age = age

        this.hello = function () {
            console.log(`Hello, My name is ${this.name}, I am ${this.age} years old`);
        }
    }
    const person1 = new person("Manthan", 19);
    console.log(person1.hello());
}

// function Closures
{
    function person(name) {
        function greet() {
            console.log("Hello" + " " + name);
        }
        return greet;
    }
    const result = person("Manthan");
    console.log(result());
}