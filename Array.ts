const arr = []  // type is never here
const names = ['hasib', 'nasima', 'hasan', 'nasir', 'amena']    // type is array of string

// arr.push(2)  this line will produce error since type of arr is not defined
// we declare the type just like below syntax

const ages: number[] = []   // array of numbers

// now we can not do any array operation that violates the rule of the type that is declared
// ages.push('nila')   //pushing string is not possible because ages is declared as a arr of numbers in the type declaration
ages.push(24) // this is correct because 24 itself is a number

// similarly declaring some other arrays with their types.
const jamais: string[] = [] // array of strings
const familyMemberCounts: number[] = []


// ------------------------- Complex examples ---------------------------------
type familyMember = {
    name: String,
    age: number,
    contact: string,
    isSingle: boolean,
}

const members: familyMember[] = []  // array of type of familyMembers. in this case this is an array of objects with each objects having the type of the each keys

members.push({
    name: 'new member',
    age: 12,
    contact: '01234567890',
    isSingle: true,
})

// this is correct. but if we try to push any other objects with different keys or with same keys but different types or more or less keys then error will occur


const arrOfArr: number[][] = [] // array of array of number type
arrOfArr.push([11])