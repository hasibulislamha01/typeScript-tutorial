// In TypeScript, tuples are a special kind of array where each element has a specific type, and the order of these types is important. This allows you to create arrays with a fixed number of elements and known types for each position.

let myTuple: [string, number, boolean] = ["hello", 42, true];

// myTuple = [35, '', false] 

// -------------------------------   CAUTION  --------------------------------------------
// despite tuples allows us to strict the number of elements and their order in the array but it does not prevent us to do the array operations like push or shift unshift and other methods. we must be careful using tuples.


let dataArray: [number, string]
dataArray = [12, 'wow']

dataArray.push(12)