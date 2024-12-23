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
function addFive(num: number){
    return num + 5
}
// addFive('hfsd')   this is wrong because we have specified num as number
addFive(3)

