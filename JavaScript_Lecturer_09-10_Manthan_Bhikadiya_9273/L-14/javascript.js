// Object Properties
{
    // Dot Notation
    let person = {
        name: "John",
        age: 30,
        city: "New York"
    };
    console.log(person.name);
    console.log(person.age);
    console.log(person.city);
}
{
    // Bracket Notation
    let person = {
        name: "John",
        age: 30,
        city: "New York"
    };
    console.log(person["name"]);
    console.log(person["age"]);
    console.log(person["city"]);
}

// function defined inside an object 
{
    let person = {
        firstname: "John",
        lastname: "Doe",
        age: 30,
        fullname: function () {
            return this.firstname + " " + this.lastname;
        }
    }
    console.log(person.fullname());
}

// Object with Array
{
    let person = {
        name: "John",
        age: 30,
        hobbies: ["reading", "traveling", "swimming"]
    };
    console.log(person.hobbies[0]);
}

// Array with Object
{
    let people = [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 },
        { name: "Jim", age: 35 }
    ];
    console.log(people[0].name);
    console.log(people[1].age);
}

//  Looping through Objects & Arrays
{
    let people = [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 },
        { name: "Jim", age: 35 }
    ];
    for (let i = 0; i < people.length; i++) {
        console.log(people[i].name + " is " + people[i].age + " years old.");
    }
}

// Object Access with Conditions
{
    let people = [
        { name: "John", marks: 56 },
        { name: "Jane", marks: 92 },
        { name: "Jim", marks: 48 }
    ];

    for (let i = 0; i < people.length; i++) {
        if (people[i].marks >= 50) {
            console.log(people[i].name + " is an pass.");
        }
    }
}