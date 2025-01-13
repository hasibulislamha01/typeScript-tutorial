// sometimes a variable can recieve not only one type. It may recieve a number or a string. in such cases we may use the type 'any' but this is not a good practice. to solve the problem we follow the following syntax and build a union type to define such variable's types.

let score: number | string;

score = 23;
score = '30'
score = 30
// score = []  this is an error

// the following example clears the necessity of using union types

type normalUser = {
    userName: string;
    password: string,
}

type admin = {
    adminName: string;
    password: string;
    secKey: number;
}
// our user was a normal user yesterday;
let hasib: normalUser | admin = { userName: 'hasibul_islam', password: '1234' }
// but we want him to be an admin here. so if we did not use the union key we were unable to edit the user hasibul and make him an admin because admin needs different data
hasib = { adminName: 'hasibulThePower', password: '1234', secKey: 9023503289 }


// this is also really usefull in functions. becasue functions may return different types of values. the returned value might be a number a string or an array. to solve the prolem in typescript we should use union types;
function getValue(id: number | string) {
    // the parameter id can be a number or a string

    // id.toLowerCase() // this will show error becasue toLowerCase() is fine with string but not with number. since our parameter can be both number or string typescript does not allow us to do such operation. for this we can check the type before doing any operation

    if (typeof id === 'string') {
        id.toLowerCase()
    }
    if (typeof id === 'number') {
        id.toExponential()
    }
}



// this is also usefull in defining array with different types of elements
const mixArray: (number | string)[] = [1, 2, 3, 4, '5']


// sometimes we also get such senario where the types will be very strictly maintained with a few values
let seatAllotment: "window" | "middle" | "aisle" 
seatAllotment = 'window'
// seatAllotment = 'crew'