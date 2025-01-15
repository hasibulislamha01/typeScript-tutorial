// In TypeScript, an interface is a blueprint or contract that defines the structure of an object. It specifies the properties and methods that an object must have, ensuring that objects adhere to a particular shape.

interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

const person1: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

const person2: Person = {
    firstName: "Jane",
    lastName: "Doe",
}; // Error: Property 'age' is missing in type '{ firstName: string; lastName: string; }' but required in type 'Person'


// basically this looks quite similar to the type declaration, but interface is not that much rigid compared to type declaration and it has some features.

// Additional Features:

// Optional Properties: You can make properties optional by using the ? symbol.
// Read-Only Properties: You can make properties read-only by using the readonly keyword.
// Extending Interfaces: You can create new interfaces that extend existing ones, inheriting their properties and methods.


interface student {
    readonly name: string,  //name can not be changed
    roll: number,
    age: number,
    phone?: string,         // phone number is optional
    giveAttendence: () => string
}



const hasibul: student = {
    name: 'hasibul islam',
    roll: 35,
    age: 23,
    giveAttendence: () => {
        return 'you are present'
    },
    favouriteSub: 'mathematics'
}

const ridika: student = {
    name: 'ridika rahman suchi',
    roll: 33,
    age: 19,
    giveAttendence: () => {
        return 'you are present'
    },
    favouriteSub: 'biology'
}


//  re openning of the interface:

// re openning of interface means that we can rewrite the interface and add additional variable's types to the interface anywhere after the main declaration
interface student {
    favouriteSub: string,  //this adds one more required varibale to the student type.
}



// we can also reuse or extend the existing types and use them in the new types
interface classRepresentative extends student {
    tasks: string[]
}