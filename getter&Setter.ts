/*

What are Getters and Setters?

Getters: A method that retrieves the value of a property. It's often used to perform calculations or return a modified value of an underlying private property.

Setters: A method that sets the value of a property. It's used to validate or modify the input value before assigning it to the underlying private property.

*/

class Person {
    private _age: number;
  
    constructor(age: number) {
      this._age = age;
    }
  
    get age(): number {
      return this._age;
    }
  
    set age(newAge: number) {
      if (newAge < 0) {
        throw new Error("Age cannot be negative.");
      }
      this._age = newAge;
    }
  }
  
  const person = new Person(30);
  console.log(person.age); // Output: 30
  
  person.age = 35; 
  console.log(person.age); // Output: 35
  
  try {
    person.age = -5; 
  } catch (error) {
    console.error(error.message); // Output: Age cannot be negative.
  }


//   Explanation:

// _age: Private property to store the person's age.
// get age(): Getter method to retrieve the value of _age.
// set age(newAge): Setter method to set the value of _age. It checks if newAge is valid before assigning it.