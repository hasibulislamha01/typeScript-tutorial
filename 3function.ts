// ---------------------------------------------------------------
// ------------  use of typeScript in function -------------------
// ---------------------------------------------------------------

// this function will add 2 to the number is passed to it
// the function's parameter number's type is not specified. so the goal of using typescript is not fullfilled
function addTwo(number) {
    return number + 2
}
addTwo(3) //works fine as usual
addTwo('3')  //works fine as well since the argument must not to be a number


// now let's look at another function
function addFive(num: number) {
    return num + 5
}
// addFive('hfsd')   this is wrong because we have specified num as number
addFive(3)



// lets look at similar but complex examples
function signUp(userName: string, password: string, email: string, isPrimiumUser: boolean) {
    console.log('user is created', userName, password, email, isPrimiumUser)
}
signUp("Hasibul", 'hasibul@gmail.com', 'howDareYou', false)




// if we need default values of the parameters then we can follow the following example
function loginUser(email: string, password: string, isPrimiumUser: boolean = false) {
    console.log('you are logged in', email, password, isPrimiumUser);
}
loginUser('hasib', 'w8e') // we are invoking the function without the argument isPrimiunUser the function will take the value of the parameter as false by default.




// But there arises problem about the return of the function we may need to use the value of the returned value of the fucntion. then the returned value's type must be known to us. for this reason we have to manage the returned value cautiously. 

// Let's clear this concept below
function addTwoNumber(num1: number, num2: number): number {
    return num1 + num2;   // this works fine as it only returns number
    // return 'ehlfdsif'  
    // this is error because the function can only return number but we are returning a string here
}

let result = addTwoNumber(2, 3)
// the variable result here is a number by the type inference of typeScript and you can not assing the value of it to any other thing except numbers

// for arrow function
const arrowOutput = (a: string, b: number): string => {
    return 'its working'
}



// sometimes a fucntion may not return any values. then it is a better ooption to specify that the fucntion is not returning anyting by using the void type of the function
function consoleError(err: string): void {
    console.error(err, "error while rendering")
}


// this is a special case where we want to return absolutely nothing from the function. in such cases we use never type
function handleError(err: string): never{
    throw new Error(err)
}



// lets look at the map fucntion from array method
const messageCount = [19, 82, 15, 31, 0]
const heros = ['batMan', 'spiderMan', 'ironMan', 'thor', 'hulk', 'doctorStrange']

// typeScript is intelligent enough to detect the type of values an array contains and infets the type for the mapping variables (counts and hero in this example)
messageCount.map(counts => {
    return counts
})

// if we want to return any specific type then we can follow the following syntax.
// here we only get string as valid value from the map method
heros.map((hero) : string => {
    return `you are ${hero}`
})

